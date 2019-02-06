import React from 'react';
import propTypes from 'prop-types';
import { Query } from 'react-apollo';

import SecContext from '~/context/secContext';
import { GET_USER_PROFILE } from '~/lib/queries';
import { Profile } from '~/components/Profiles';
import { LoadingScreen } from '~/components/shared';
import router, { Router } from '~/server/routes';

export default class extends React.Component {
  static contextType = SecContext;

  static propTypes = {
    username: propTypes.string.isRequired,
  };

  static async getInitialProps ({ query, req, res }) {
    if (req && res && req.user && req.user.username === query.username) {
      res.writeHead(302, { Location: router.findByName('myProfile').toPath() });
      res.end();
      return { ...query };
    }

    return { ...query };
  }

  state = {
    loadingProfile: true,
  }

  componentDidMount () {
    const { user = {} } = this.context || {};
    const { username } = user;
    if (process.browser && username && window.location.pathname.indexOf(username) > -1) {
      Router.pushRoute('myProfile');
    } else {
      this.setState({ loadingProfile: false });
    }
  }

  render () {
    const { username } = this.props;
    const { loadingProfile } = this.state;

    if (loadingProfile) return <LoadingScreen withLayout />;

    return (
      <Query
        query={GET_USER_PROFILE}
        notifyOnNetworkStatusChange
        variables={{ username }}
      >
        {({ data: profileData, loading, error }) => (loading
          ? <LoadingScreen withLayout />
          : error
            ? <div>Error!</div> // @todo: better error message
            : !profileData.profile
              ? <div>El perfil no existe!</div> // @todo: better error message
              : <Profile {...{ ...profileData }} />
        )}
      </Query>
    );
  }
}
