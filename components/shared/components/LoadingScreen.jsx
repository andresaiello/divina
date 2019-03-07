import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Loader from './Loader';
import withMainLayout from '~/HOCs/withMainLayout';

const FullScreenLoader = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  color: white;
  background: white;
  z-index: 100000;
  touch-action: none;
`;

export default function LoadingScreen ({ withLayout }) {
  const EnhancedLoader = props => (
    <FullScreenLoader {...props}>
      <Loader />
    </FullScreenLoader>
  );

  const Loading = withLayout
    ? withMainLayout(EnhancedLoader)
    : EnhancedLoader;

  return <Loading />;
}

LoadingScreen.defaultProps = {
  withLayout: false,
};

LoadingScreen.propTypes = {
  withLayout: propTypes.bool,
};
