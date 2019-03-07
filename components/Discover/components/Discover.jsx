import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Image, SearchBar } from '~/components/shared';
import { Link } from '~/server/routes';

import withMainLayout from '~/HOCs/withMainLayout';

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

function Discover (props) {
  return (
    <Fragment>
      <SearchBar />
      <DiscoverGrid {...props}>
        {[...Array(10).keys()].map((k, i) => (
          // <Link route="pictureDetails" params={{ postId: 1 }} prefetch key={k}>
          <Image
            key={i}
            height={i === 3 ? '165px' : '80px'}
            className={i === 3 ? 'third' : ''}
            src="/static/girl.jpeg"
            alt="Foto de perfil"
          />
          // </Link>
        ))}
      </DiscoverGrid>
    </Fragment>
  );
}

export default withMainLayout(Discover);
