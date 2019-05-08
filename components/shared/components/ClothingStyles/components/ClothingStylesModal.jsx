import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { FullscreenModal } from '~/components/shared';
import { clothingStylePropTypes } from '~/Hooks/useClothingStyles';

import StyleOption from './StyleOption';

const ModalContent = styled.div`
  display: grid;
  padding: 0.5%;
  grid-template-columns: 32.5% 32.5% 32.5%;
  justify-content: space-between;
  grid-row-gap: 0.25%;
`;

const StyledButton = styled(Button)`
  && {
    width: 80px;
    height: 28px;
    padding: 1px 16px;
    text-transform: none;
  }
`;

export default function ClothingStylesModal({
  clothingStyles,
  onStyleClick,
  closeAndCancelSelection,
  close,
  ...rest
}) {
  const ApplyButton = (
    <StyledButton variant="contained" color="secondary" onClick={close}>
      Aplicar
    </StyledButton>
  );

  return (
    <FullscreenModal
      title="Estilos"
      appBarContent={ApplyButton}
      close={closeAndCancelSelection}
      {...rest}
    >
      <ModalContent>
        {clothingStyles.map(style => (
          <StyleOption
            key={style.name}
            imgSrc={style.imgUrl}
            styleName={style.name}
            selected={style.selected}
            onClick={() => onStyleClick(style.name)}
          />
        ))}
      </ModalContent>
    </FullscreenModal>
  );
}

ClothingStylesModal.defaultProps = {};

ClothingStylesModal.propTypes = {
  clothingStyles: propTypes.arrayOf(clothingStylePropTypes.isRequired).isRequired,
  close: propTypes.func.isRequired,
  closeAndCancelSelection: propTypes.func.isRequired,
  onStyleClick: propTypes.func.isRequired,
};
