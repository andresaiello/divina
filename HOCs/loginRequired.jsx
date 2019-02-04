import React, { Component } from 'react';

import SecContext from '~/context/secContext';
import { LoadingScreen } from '~/components/shared';

export default BaseComponent => class extends Component {
  static contextType = SecContext;

  state = {
    error: false,
  }

  render () {
    const { loading, user } = this.context;

    return (loading
      ? <LoadingScreen withLayout />
      : user
        ? <BaseComponent {...this.props} />
        : null
    );
  }
};
