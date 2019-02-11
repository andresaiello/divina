import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Button } from '@material-ui/core';

import { CREATE_POST } from '~/lib/queries';
import withMainLayout from '~/HOCs/withMainLayout';
import { Image, Input, LoadingScreen } from '~/components/shared';
import secContext from '~/context/secContext';
import { Router } from '~/server/routes';

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
    picUrl: propTypes.string.isRequired,
  }

  state = {
    caption: '',
  }

  componentDidMount () {
    return true;
  }

  editCaption = (e) => {
    const { target: { value } } = e;
    this.setState({ caption: value });
  }

  render () {
    const { user } = this.context;
    const { picUrl } = this.props;
    const { caption } = this.state;

    // @todo: use draft instead of saving in-memory

    return (
      <Mutation
        mutation={CREATE_POST}
      >
        {(createPost, { data }) => console.log(data) || (
        <Container>
          <Image
            className="image"
            withLoader
            src={picUrl}
            alt="Post"
          />
          <Input
            onChange={this.editCaption}
            value={caption}
          />
          <Button
            className="save"
            color="primary"
            onClick={async () => {
              try {
                await createPost({ variables: { author: user._id, caption, picUrl: decodeURIComponent(picUrl) } });
                Router.pushRoute('feed');
              } catch (e) {
                console.log(e);
                Router.pushRoute('feed');
              }
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
