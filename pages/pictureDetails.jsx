import React from 'react';

import { PictureDetails } from '~/components/PictureDetails';

const createImageUrl = postId => postId;

export default class extends React.Component {
  static async getInitialProps ({ query }) {
    return { ...query };
  }

  render () {
    const imageUrl = createImageUrl(this.props.postId);

    return <PictureDetails imageUrl={imageUrl} />;
  }
}
