import React from 'react';

import { MyProfile } from '~/components/Profiles';
import { Query } from 'react-apollo';
import { User } from '~/lib/graphql';
import { LoadingScreen } from '~/components/shared';
import SecContext from '~/context/secContext';

export default class extends React.Component {
  static contextType = SecContext;

  render () {
    const { user } = this.context;
    if (!user || !user.username) return <div>Necesitás estar logueado</div>; // @todo: set better error

    return (
      <Query
        query={User.Queries.GET_PROFILE}
        notifyOnNetworkStatusChange
        variables={{ username: user.username }}
      >
        {({ data: profileData, loading, error }) => (loading
          ? <LoadingScreen withLayout />
          : error
            ? <div>Error!</div> // @todo: better error message
            : !profileData.profile
              ? <div>El perfil no existe!</div> // @todo: better error message
              : <MyProfile {...{ ...profileData }} />
        )}
      </Query>
    );
  }
}
