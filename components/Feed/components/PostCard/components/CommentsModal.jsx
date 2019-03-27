import React from 'react';
import propTypes from 'prop-types';

import { FullscreenModal, Comments } from '~/components/shared/';

export default function CommentsModal ({ postId, isOpen, close }) {
  return (
    <FullscreenModal
      title="Comentarios"
      transitionDirection="left"
      {...{ isOpen, close }}
    >
      <Comments postId={postId} />
    </FullscreenModal>
  );
}

CommentsModal.propTypes = {
  postId: propTypes.string.isRequired,
  isOpen: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
};
