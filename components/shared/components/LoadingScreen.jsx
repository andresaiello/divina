import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Loader from './Loader';
import withMainLayout from '~/HOCs/withMainLayout';

const FullScreenLoader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  background: white;
  z-index: 100000;
`;

export default function LoadingScreen ({ withLayout }) {
  const Loading = withLayout
    ? withMainLayout(() => (
      <FullScreenLoader>
        <Loader />
      </FullScreenLoader>
    ))
    : () => (
      <FullScreenLoader>
        <Loader />
      </FullScreenLoader>
    );

  return <Loading />;
}

LoadingScreen.defaultProps = {
  withLayout: false,
};

LoadingScreen.propTypes = {
  withLayout: propTypes.bool,
};
