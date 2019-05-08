import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';

const StyledIconButton = styled(IconButton)`
  && {
    padding: 12px 12px 8px 12px;
  }
`;

export default function MoreOptionsButton({ openModal }) {
  return (
    <StyledIconButton onClick={openModal}>
      <MoreHoriz />
    </StyledIconButton>
  );
}

MoreOptionsButton.propTypes = {
  openModal: propTypes.func.isRequired,
};
