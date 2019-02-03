import React from 'react';
import styled from 'styled-components';

import Loader from './Loader';

const FontsLoader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  background: white;
  z-index: 100000;
`;

export default function LoadingScreen () {
  return <FontsLoader><Loader /></FontsLoader>;
}
