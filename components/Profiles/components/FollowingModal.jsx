import React from 'react';
import propTypes from 'prop-types';
import { Query } from 'react-apollo';

import { FullscreenModal, Loader } from '~/components/shared/';
import { PROFILE_GET_FOLLOWING } from '~/lib/queries';

import FollowList from './FollowList';

export default function FollowingModal ({ isOpen, closeModal, username }) {
  return (
    <FullscreenModal
      title="Siguiendo"
      isOpen={isOpen}
      close={() => closeModal('followingModalOpen')}
    >
      <Query
        query={PROFILE_GET_FOLLOWING}
        variables={{ username }}
      >
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <div>Hubo un error</div>; // @todo better error
          if (!data || !data.profile || !data.profile.user || data.profile.user.following.length === 0) {
            return <div>El usuario no sigue a nadie</div>; // @todo better message
          }

          return <FollowList elements={data.profile.user.following} />;
        }}
      </Query>
    </FullscreenModal>
  );
}

FollowingModal.defaultProps = {
  isOpen: false,
};

FollowingModal.propTypes = {
  isOpen: propTypes.bool,
  closeModal: propTypes.func.isRequired,
  username: propTypes.string.isRequired,
};
