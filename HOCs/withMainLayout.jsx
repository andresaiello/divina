import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import { HeadAppBar, BottomAppBar } from '../components/shared';
import withRouteProgress from './withRouteProgress';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
  }

  .disable-select{
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Likely future */
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
