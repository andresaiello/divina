import React from 'react';
import propTypes from 'prop-types';

import { UploadPicture } from '~/components/UploadPicture';

export default class extends React.Component {
  static async getInitialProps ({ query }) {
    // @todo: check that:
    // the _id exists
    // the user actually has access to edit the _id
    // the pic has been recently uploaded and needs edition
    return { ...query };
  }

  render () {
    // @todo IMPORTANT: VALIDATE PICURL
    return <UploadPicture picUrl={this.props.picUrl} />;
  }
}
