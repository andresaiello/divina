import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import { HeadAppBar, BottomAppBar } from '../components/shared';
import withRouteProgress from './withRouteProgress';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0 0 55px;
  }
`;

export default BaseComponent => ({ hideProgressBar, ...rest }) => {
  const Content = props => (
    <Fragment>
      <GlobalStyle />
      <HeadAppBar />
      <BaseComponent {...props} />
      <BottomAppBar />
    </Fragment>
  );

  if (hideProgressBar) return <Content {...rest} />;

  const ContentWithProgressBar = withRouteProgress(Content);

  return <ContentWithProgressBar {...rest} />;
};
