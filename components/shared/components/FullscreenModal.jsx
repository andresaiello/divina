import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Dialog, AppBar, Toolbar, IconButton, Typography, Slide } from '@material-ui/core';
import { Close, ChevronLeft } from '@material-ui/icons';

const StyledDialog = styled(Dialog)``;

const StyledAppBar = styled(AppBar)`
  && {
    background: white;
    color: rgb(74, 74, 74);
    box-shadow: none;
    border-bottom: 1px solid rgb(218, 218, 219);
    user-select: none;

    .toolbar {
      min-height: 45px;
      padding: 0px 8px;
      justify-content: space-between;
    }

    .leftContent {
      display: flex;
      align-items: center;
    }

    .backIcon {
      color: rgb(1, 145, 255);
      width: 2rem;
      height: 2rem;
    }

    h4 {
      font-size: 1.15rem;
      margin: 0px;
    }
  }
`;

const Transition = props => <Slide {...props} />;

export default function FullscreenModal({
  isOpen,
  customAppBar,
  transitionDirection,
  close,
  title,
  children,
  appBarContent,
  ...rest
}) {
  const appBar = (
    <StyledAppBar position="static">
      <Toolbar className="toolbar">
        <div className="leftContent">
          <ChevronLeft className="backIcon" onClick={close} />
        </div>
        <Typography component="h4">{title}</Typography>
        {appBarContent || <div />}
      </Toolbar>
    </StyledAppBar>
  );

  return (
    <StyledDialog
      fullScreen
      open={isOpen}
      onClose={close}
      TransitionComponent={Transition}
      TransitionProps={{ direction: transitionDirection }}
      {...rest}
    >
      {customAppBar || appBar}
      <div className="content">{children}</div>
    </StyledDialog>
  );
}

FullscreenModal.defaultProps = {
  transitionDirection: 'left',
  customAppBar: null,
};

FullscreenModal.propTypes = {
  customAppBar: propTypes.element,
  transitionDirection: propTypes.string,
  isOpen: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.element), propTypes.element])
    .isRequired,
  title: propTypes.string.isRequired,
};
