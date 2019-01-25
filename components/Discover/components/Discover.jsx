import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Image } from '~/components/shared';
import { Link } from '~/routes';

import withMainLayout from '~/HOCs/withMainLayout';

const StyledDiscover = styled.div`

`;

const DiscoverGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 32.5% 32.5% 32.5%;
  grid-row-gap: 5px;
  justify-content: space-between;
  
  .third {
    grid-row: 1 / span 2;
    grid-column: 2 / span 2;
  }
`;

function Discover () {
  return (
    <Fragment>
      <div>Fotos de desconocidos</div>
      <DiscoverGrid>
        {[...Array(10).keys()].map((k, i) => (
          <Link route="pictureDetails" prefetch key={k}>
            <Image
              height={i === 3 ? '165px' : '80px'}
              className={i === 3 ? 'third' : ''}
              src="/static/girl.jpeg"
              alt="Foto de perfil"
            />
          </Link>
        ))}
      </DiscoverGrid>
    </Fragment>
  );
}

export default withMainLayout(Discover);
