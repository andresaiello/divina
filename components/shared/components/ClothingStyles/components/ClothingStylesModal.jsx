import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { FullscreenModal } from '~/components/shared';
import StyleOption from './StyleOption';
import { clothingStyles as baseClothingStyles } from '~/constants';

const ModalContent = styled.div`
  display: grid;
  padding: .5%;
  grid-template-columns: 32.5% 32.5% 32.5%;
  justify-content: space-between;
  grid-row-gap: .25%;
`;

export default function ClothingStylesModal ({ clothingStyles, onStyleClick, ...rest }) {
  return (
    <FullscreenModal
      title="Estilos"
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

ClothingStylesModal.defaultProps = {
};

ClothingStylesModal.propTypes = {
  clothingStyles: propTypes.arrayOf(propTypes.shape({})).isRequired,
  onStyleClick: propTypes.func.isRequired,
};
