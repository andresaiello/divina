import React, { Fragment, Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import Router from 'next/router';
import LinearProgress from '@material-ui/core/LinearProgress';

import { HeadAppBar, BottomAppBar } from '../components/shared';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0 0 55px;
  }
`;

export default BaseComponent => class extends Component {
  state = {
    showBar: false,
  }

  componentDidMount () {
    Router.onRouteChangeStart = () => this.setState({ showBar: true });
    Router.onRouteChangeComplete = () => this.setState({ showBar: false });
    Router.onRouteChangeError = () => this.setState({ showBar: false });
  }

  componentWillUnmount () {
    Router.onRouteChangeStart = null;
    Router.onRouteChangeComplete = null;
    Router.onRouteChangeError = null;
  }

  render () {
    const { showBar } = this.state;

    return (
      <Fragment>
        <Fragment>
          <GlobalStyle />
          <HeadAppBar />
          {showBar ? <LinearProgress /> : null }
          <BaseComponent {...this.props} />
          <BottomAppBar />
        </Fragment>
      </Fragment>
    );
  }
};
