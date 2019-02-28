import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Button } from '@material-ui/core';
import getConfig from 'next/config';

import { Post } from '~/lib/graphql';
import withMainLayout from '~/HOCs/withMainLayout';
import { Image, Input, LoadingScreen } from '~/components/shared';
import secContext from '~/context/secContext';
import { Router } from '~/server/routes';
import PictureCrop from './PictureCrop';

const { publicRuntimeConfig } = getConfig();
const { CLOUDINARY_UPLOAD_URL, CLOUDINARY_PRESET } = publicRuntimeConfig;

const Container = styled.div`
  display: grid;

  .save {
    width: 50%;
    max-width: 200px;
    margin: 50px auto;
  }
`;

class UploadPicture extends Component {
  static contextType = secContext;

  static propTypes = {
    src: propTypes.string.isRequired,
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired,
  }

  state = {
    uploading: false,
    caption: '',
    base64Img: this.props.height === this.props.width ? this.props.src : null,
  }

  updatePicture = (base64Img) => {
    this.setState({ base64Img });
  }

  editCaption = (e) => {
    const { target: { value } } = e;
    this.setState({ caption: value });
  }

  base64ToFile = async base64Img => fetch(base64Img)
    .then(res => res.blob())
    .then(blob => new File([blob], 'image'));

  uploadToImageServer = async () => {
    const { user } = this.context;
    const { base64Img } = this.state;

    const file = await this.base64ToFile(base64Img);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_PRESET); // se configura en cloudinary
    formData.append('multiple', true);
    formData.append('tags', `${user._id}, ${user.name}, ${user.username}`);
    formData.append('context', '');

    return fetch(CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      // eslint-disable-next-line
      .then(({ public_id, secure_url }) => ({ public_id, secure_url }));
    // @todo: do something when the upload fails
  }

  render () {
    const { user } = this.context;
    const { src, width, height } = this.props;
    const { caption, uploading } = this.state;

    if (uploading) return <LoadingScreen />;

    return (
      <Mutation
        mutation={Post.Mutations.CREATE}
      >
        {(createPost, { data }) => (
          <Container>
            {height === width
              ? <Image src={src} alt="Post" />
              : <PictureCrop updatePicture={this.updatePicture} {...{ src, width, height }} />
            }
            <Input
              onChange={this.editCaption}
              value={caption}
            />
            <Button
              className="save"
              color="primary"
              onClick={async () => {
                this.setState({ uploading: true }, async () => {
                  try {
                    const { public_id: picId, secure_url: picUrl } = await this.uploadToImageServer();
                    const { data: { createPost: { _id } } } = await createPost({
                      variables: {
                        author: user._id, caption, picUrl, picId,
                      },
                    });

                    Router.pushRoute('editPost', { postId: _id });
                  } catch (e) {
                    console.log(e);
                    Router.pushRoute('feed');
                  }
                });
              }}
              variant="contained"
            >
              Publicar
            </Button>
          </Container>
        )}
      </Mutation>
    );
  }
}

export default withMainLayout(UploadPicture);
