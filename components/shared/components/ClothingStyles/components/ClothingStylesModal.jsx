import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import cloneDeep from 'lodash/cloneDeep';

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

const localClothingStyles = cloneDeep(baseClothingStyles);

export default function ClothingStylesModal ({ ...rest }) {
  const [clothingStyles, setClothingStyles] = useState(localClothingStyles);

  function changeStyleSelection (styleName) {
    setClothingStyles(prev => ({
      ...prev,
      [styleName]: {
        ...prev[styleName],
        selected: !prev[styleName].selected,
      },
    }));
  }

  return (
    <FullscreenModal
      title="Estilos"
      {...rest}
    >
      <ModalContent>
        {Object.keys(clothingStyles).map(key => (
          <StyleOption
            key={clothingStyles[key].name}
            imgSrc={clothingStyles[key].imgUrl}
            styleName={clothingStyles[key].name}
            selected={clothingStyles[key].selected}
            onClick={() => changeStyleSelection(clothingStyles[key].name)}
          />
        ))}
      </ModalContent>
    </FullscreenModal>
  );
}

ClothingStylesModal.propTypes = {

};
