import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  Dialog, AppBar, Toolbar, IconButton, Typography, Slide,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const StyledDialog = styled(Dialog)`
  .appBar {
    position: relative;
  }
`;

function Transition (props) {
  return <Slide direction="up" {...props} />;
}

export default function FullscreenModal ({
  isOpen, close, title, children, ...rest
}) {
  return (
    <StyledDialog
      fullScreen
      open={isOpen}
      onClose={close}
      TransitionComponent={Transition}
      {...rest}
    >
      <AppBar className="appBar">
        <Toolbar>
          <IconButton color="inherit" onClick={close} aria-label="Close">
            <Close />
          </IconButton>
          <Typography variant="h6" color="inherit" className="flex">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </StyledDialog>
  );
}

FullscreenModal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.element), propTypes.element]).isRequired,
  title: propTypes.string.isRequired,
};
