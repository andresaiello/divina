import React, { Fragment, Component } from 'react';

import Router from 'next/router';
import LinearProgress from '@material-ui/core/LinearProgress';

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
          {showBar ? <LinearProgress /> : null }
          <BaseComponent {...this.props} />
        </Fragment>
      </Fragment>
    );
  }
};
