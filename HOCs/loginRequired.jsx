import React, { Component, Fragment } from 'react';

import SecContext from '~/context/secContext';

export default BaseComponent => class extends Component {
  static contextType = SecContext;

  state = {
    error: false,
  }

  render () {
    console.log(this.context);
    return (
      <BaseComponent {...this.props} />
    );
  }
};
