import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { FullscreenModal } from '~/components/shared';
import StyleOption from './StyleOption';

const ModalContent = styled.div`
  display: grid;
  padding: .5%;
  grid-template-columns: 32.5% 32.5% 32.5%;
  justify-content: space-between;
  grid-row-gap: .25%;
`;

export default function ClothingStylesModal ({ ...rest }) {
  return (
    <FullscreenModal
      title="Estilos"
      {...rest}
    >
      <ModalContent>
        {[...new Array(10).fill(0)].map((data, i) => (
          <StyleOption
            key={i}
            imgSrc="/static/girl.jpeg"
            styleName="Prueba"
          />
        ))}
      </ModalContent>
    </FullscreenModal>
  );
}

ClothingStylesModal.propTypes = {

};
