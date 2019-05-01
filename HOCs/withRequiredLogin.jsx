import React, { Component } from 'react';

import SecContext from '~/context/secContext';
import { LoadingScreen } from '~/components/shared';
import { isServer, isLoggedIn, serverRedirect, clientRedirect } from '~/util';

/**
 * this HOC works only for pages, (it implements getInitialProps)
 */
export default function withRequiredLogin(BaseComponent) {
  class Enhancer extends Component {
    static async getInitialProps(ctx) {
      let BaseComponentInitialProps = {};

      if (BaseComponent.getInitialProps) {
        BaseComponentInitialProps = await BaseComponent.getInitialProps(ctx);
      }

      if (isServer()) {
        if (!isLoggedIn(ctx.req.user)) serverRedirect('landing')(ctx.res);
      }

      return { ...BaseComponentInitialProps, user: ctx.req && ctx.req.user };
    }

    static contextType = SecContext;

    state = {
      loading: true,
    };

    componentDidMount() {
      const { user } = this.context;
      // in case that the req came from the server (no context is set yet)
      const { user: userFromServer } = this.props;

      if (process.browser && !isLoggedIn(user || userFromServer)) clientRedirect('landing');
      else this.setState({ loading: false });
    }

    render() {
      const { loading: loadingContext, user } = this.context;
      const { loading } = this.state;

      return loadingContext || loading || !user ? (
        <LoadingScreen withLayout />
      ) : (
        <BaseComponent {...this.props} />
      );
    }
  }

  return Enhancer;
}
