import React, { Fragment, Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import { Router } from '../server/routes';

// @todo make it permanently fixed to the top independently of the vertical position

export default BaseComponent => class extends Component {
  state = {
    showBar: false,
  }

  componentDidMount () {
    if (process.browser) {
      Router.onRouteChangeStart = () => this.setState({ showBar: true });
      Router.onRouteChangeComplete = () => this.setState({ showBar: false });
      Router.onRouteChangeError = () => this.setState({ showBar: false });
    }
  }

  componentWillUnmount () {
    if (process.browser) {
      Router.onRouteChangeStart = null;
      Router.onRouteChangeComplete = null;
      Router.onRouteChangeError = null;
    }
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
