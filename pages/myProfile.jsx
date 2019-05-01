import React from 'react';
import { Query } from 'react-apollo';

import { MyProfile } from '~/components/Profiles';
import { User } from '~/lib/graphql';
import { LoadingScreen } from '~/components/shared';
import SecContext from '~/context/secContext';
import withRequiredLogin from '~/HOCs/withRequiredLogin';

class MyProfilePage extends React.Component {
  static async getInitialProps({ query }) {
    return { ...query };
  }

  static contextType = SecContext;

  render() {
    const { user } = this.context;

    return (
      <Query
        query={User.Queries.GET_PROFILE}
        notifyOnNetworkStatusChange
        variables={{ username: user.username }}
      >
        {({ data: profileData, loading, error }) =>
          loading ? (
            <LoadingScreen withLayout />
          ) : error ? (
            <div>Error!</div> // @todo: better error message
          ) : !profileData.profile ? (
            <div>El perfil no existe!</div> // @todo: better error message
          ) : (
            <MyProfile {...{ ...profileData }} />
          )
        }
      </Query>
    );
  }
}

export default withRequiredLogin(MyProfilePage);
