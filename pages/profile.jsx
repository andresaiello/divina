import React from 'react';
import propTypes from 'prop-types';
import { Query } from 'react-apollo';

import SecContext from '~/context/secContext';
import { User } from '~/lib/graphql';
import { Profile } from '~/components/Profiles';
import { LoadingScreen } from '~/components/shared';
import { Router } from '~/server/routes';
import { isServer, serverRedirect, clientRedirect } from '~/util';

export default class extends React.Component {
  static contextType = SecContext;

  static propTypes = {
    username: propTypes.string.isRequired,
  };

  static async getInitialProps ({ query, req, res }) {
    if (isServer()) {
      const isLoggedUserProfile = req.user && req.user.username === query.username;
      if (isLoggedUserProfile) serverRedirect('myProfile')(res);
    }

    return { ...query };
  }

  state = {
    loadingProfile: true,
  }

  componentDidMount () {
    const { user } = this.context || {};
    const { username } = user || {};

    const isLoggedUserProfile = username && window.location.pathname.indexOf(username) > -1;

    if (process.browser && isLoggedUserProfile) clientRedirect('myProfile');
    else this.setState({ loadingProfile: false });
  }

  render () {
    const { username } = this.props;
    const { loadingProfile } = this.state;

    if (loadingProfile) return <LoadingScreen withLayout />;

    return (
      <Query
        query={User.Queries.GET_PROFILE}
        notifyOnNetworkStatusChange
        variables={{ username }}
      >
        {({ data: profileData, loading, error }) => (loading
          ? <LoadingScreen withLayout />
          : error
            ? <div>Error!</div> // @todo: better error message
            : !profileData.profile
              ? <div>El perfil no existe!</div> // @todo: better error message
              : <Profile {...profileData} />
        )}
      </Query>
    );
  }
}
