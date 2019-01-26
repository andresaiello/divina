import React from 'react';
import styled from 'styled-components';

import { Image } from '~/components/shared';
import { Link } from '~/server/routes';

const StyledPhotoGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 32% 32% 32%;
  grid-row-gap: 5px;
  justify-content: space-between;
`;

export default function PhotoGrid () {
  return (
    <StyledPhotoGrid>
      {[...Array(10).keys()].map(k => (
        <Link route="pictureDetails" prefetch key={k}>
          <Image
            height="80px"
            src="/static/girl.jpeg"
            alt="Foto de perfil"
          />
        </Link>
      ))}
    </StyledPhotoGrid>
  );
}
