import React, { Component } from 'react';
import propTypes from 'prop-types';

import { EditPost } from '~/components/EditPost';

export default class extends Component {
  static propTypes = {
    postId: propTypes.string.isRequired,
  }

  static async getInitialProps ({ query }) {
    return { ...query };
  }

  render () {
    const { postId } = this.props;

    return <EditPost postId={postId} />;
  }
}
