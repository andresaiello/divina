import React from 'react';
import propTypes from 'prop-types';

import { UploadPicture } from '~/components/UploadPicture';
import PictureUploadContext from '~/context/PictureUploadContext';
import router, { Router } from '~/server/routes';

export default class extends React.Component {
  static async getInitialProps({ query, res }) {
    // allow the user to access this route only from the client
    if (!process.browser) {
      res.writeHead(302, { Location: router.findByName('feed').toPath() });
      res.end();
    }

    return { ...query };
  }

  static contextType = PictureUploadContext;

  componentDidMount() {
    const { src } = this.context;

    if (!src) Router.pushRoute('feed');
  }

  render() {
    if (!this.context.src) return null;

    return <UploadPicture hideFooter {...{ ...this.context }} />;
  }
}
