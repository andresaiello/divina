import React, { Component } from 'react';

export default BaseComponent =>
  class extends Component {
    state = {
      error: false,
    };

    componentDidCatch() {
      this.setState({ error: true });
    }

    render() {
      const { error } = this.state;

      return error ? null : <BaseComponent {...this.props} />;
    }
  };
