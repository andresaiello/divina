import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { Dialog, Paper } from '@material-ui/core';

const StyledPaper = styled(Paper)`
  && {
    text-align: center;
    width: 75%;
    max-width: 200px;
    border-radius: 6px;
  }
`;

function Modal({ children, isOpen, close }) {
  return (
    <Dialog
      open={isOpen}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperComponent={StyledPaper}
    >
      {children}
    </Dialog>
  );
}

Modal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
};

export default Modal;
