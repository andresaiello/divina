import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import { CircularProgress } from '@material-ui/core';

import { readImageAsBase64 } from '~/util';
import { Router } from '~/server/routes';
import PictureUploadContext from '~/context/PictureUploadContext';

export default function UploadImageContainer ({ icon }) {
  const [uploading, setUploading] = useState(false);

  async function onDrop (acceptedFiles, rejectedFiles, uploadPicture) {
    setUploading(true);

    let fileToSend = null;
    acceptedFiles.forEach((file) => { fileToSend = file; });

    const { base64Img, width, height } = await readImageAsBase64(fileToSend);

    uploadPicture({
      src: base64Img, width, height,
    }, () => Router.pushRoute('uploadPicture'));
  }

  if (uploading) return <CircularProgress />;

  return (
    <PictureUploadContext.Consumer>
      {({ uploadPicture }) => (
        <Dropzone
          onDrop={(accepted, rejected) => { onDrop(accepted, rejected, uploadPicture); }}
          className="drop-zone"
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="button-small">
              <input {...getInputProps()} />
              {icon}
            </div>
          )}
        </Dropzone>
      )}
    </PictureUploadContext.Consumer>
  );
}

UploadImageContainer.propTypes = {
  icon: propTypes.element.isRequired,
};
