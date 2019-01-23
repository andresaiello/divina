import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import { BottomAppBar } from '../components/shared';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0 0 55px;
  }
`;

export default BaseComponent => props => (
  <Fragment>
    <GlobalStyle />
    <BaseComponent {...props} />
    <BottomAppBar />
  </Fragment>
);
