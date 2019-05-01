import React from 'react';
import propTypes from 'prop-types';
import { Button, DialogActions, DialogContent } from '@material-ui/core';

import { Modal } from '~/components/shared';
import ReportPost from './ReportPost';
import DeletePost from './DeletePost';

const BaseContent = ({ content, customCloseButton }) => (
  <>
    <DialogContent>{content}</DialogContent>
    {customCloseButton && <DialogActions>{customCloseButton}</DialogActions>}
  </>
);

export default function MoreOptionsModal({ isOwner, isOpen, close, postId }) {
  return (
    <Modal isOpen={isOpen} close={close}>
      {isOwner ? (
        <DeletePost postId={postId} close={close} BaseContent={BaseContent} />
      ) : (
        <ReportPost postId={postId} close={close} BaseContent={BaseContent} />
      )}
    </Modal>
  );
}

MoreOptionsModal.propTypes = {
  postId: propTypes.string.isRequired,
  isOwner: propTypes.bool.isRequired,
  isOpen: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
};
