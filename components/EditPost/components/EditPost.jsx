import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Mutation, Query } from 'react-apollo';

import withMainLayout from '~/HOCs/withMainLayout';
import { Router } from '~/server/routes';
import { Post, EditPost as EditPostGQL } from '~/lib/graphql';
import { Loader } from '~/components/shared';

import EditDots from './EditDots';
import DotsModal from './DotsModal';

const Container = styled.div`
  text-align: center;
`;

class EditPost extends Component {
  static propTypes = {
    postId: propTypes.string.isRequired,
  };

  state = {
    xPosition: 0,
    xLength: null,
    yPosition: 0,
    yLength: null,
    dotsModalOpen: false,
    savingDot: false,
  }

  selectDotPlace = (e) => {
    this.setState({
      dotsModalOpen: true,
      xPosition: e.nativeEvent.offsetX,
      yPosition: e.nativeEvent.offsetY,
    });
  }

  onSaveDot = async (persistDot, dotData) => {
    const {
      xPosition, xLength, yPosition, yLength,
    } = this.state;
    const { postId } = this.props;

    const variables = {
      postId,
      xPosition: xPosition / xLength,
      yPosition: yPosition / yLength,
      ...dotData,
    };

    this.setState({ savingDot: true }, async () => {
      await persistDot({ variables });

      this.setState({
        xPosition: 0,
        yPosition: 0,
        savingDot: false,
        dotsModalOpen: false,
      });
    });
  }

  closeDotsModal = () => {
    this.setState({
      dotsModalOpen: false,
      xPosition: 0,
      yPosition: 0,
    });
  }

  getImageSize = (e) => {
    this.setState({ xLength: e.target.width, yLength: e.target.height });
  }

  render () {
    const {
      xPosition, xLength, yPosition, yLength, dotsModalOpen, savingDot,
    } = this.state;
    const { postId, ...rest } = this.props;

    return (
      <Query
        query={EditPostGQL.Queries.GET_POST}
        variables={{ _id: postId }}
      >
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <div>Error!</div>; // @todo: better error message
          if (!data.post || !data.post.picUrl) return <div>No existe!</div>; // @todo: better error message

          return (
            <Container {...rest}>
              <EditDots
                selectDotPlace={this.selectDotPlace}
                existentDots={data.post.dots && data.post.dots.nodes}
                imageSizeX={xLength}
                imageSizeY={yLength}
                dotX={xPosition}
                dotY={yPosition}
                displayDot={xPosition + yPosition !== 0}
                getImageSize={this.getImageSize}
                picUrl={data.post.picUrl}
                postId={postId}
              />
              <p>¡Toca sobre la imagen para empezar a agregar tus dots!</p>
              <Mutation
                mutation={Post.Mutations.ADD_DOT}
              >
                {addDot => (
                  <DotsModal
                    isOpen={dotsModalOpen}
                    close={this.closeDotsModal}
                    onSaveDot={this.onSaveDot}
                    savingDot={savingDot}
                    persistDot={addDot}
                  />
                )}
              </Mutation>
              <Button
                className="save"
                color="primary"
                variant="contained"
                onClick={() => Router.pushRoute('feed')}
              >
                Guardar
              </Button>
            </Container>
          );
        }}
      </Query>
    );
  }
}


export default withMainLayout(EditPost);
