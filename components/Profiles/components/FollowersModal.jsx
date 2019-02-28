import React from 'react';
import propTypes from 'prop-types';
import { Query } from 'react-apollo';

import { FullscreenModal, Loader } from '~/components/shared/';
import { Profile } from '~/lib/graphql';

import FollowList from './FollowList';

export default function FollowersModal ({ isOpen, closeModal, username }) {
  return (
    <FullscreenModal
      title="Seguidores"
      isOpen={isOpen}
      close={() => closeModal('followersModalOpen')}
    >
      <Query
        query={Profile.Queries.GET_FOLLOWERS}
        variables={{ username }}
      >
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <div>Hubo un error</div>; // @todo better error
          if (!data || !data.profile || !data.profile.user || data.profile.user.followers.length === 0) {
            return <div>El usuario no tiene seguidores</div>; // @todo better message
          }
          return <FollowList elements={data.profile.user.followers} />;
        }}
      </Query>
    </FullscreenModal>
  );
}

FollowersModal.defaultProps = {
  isOpen: false,
};

FollowersModal.propTypes = {
  isOpen: propTypes.bool,
  closeModal: propTypes.func.isRequired,
  username: propTypes.string.isRequired,
};
