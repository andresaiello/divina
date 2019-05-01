import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Mutation, Query } from 'react-apollo';

import withMainLayout from '~/HOCs/withMainLayout';
import withClothingStyles from '~/HOCs/withClothingStyles';
import { Router } from '~/server/routes';
import { Post, EditPost as EditPostGQL } from '~/lib/graphql';
import { Loader, ClothingStylesModal } from '~/components/shared';

import EditDots from './EditDots';
import DotsModal from './DotsModal';
import StylesSelect from './StylesSelect';

const Container = styled.div`
  text-align: center;

  .content {
    margin: 0 10px;
  }
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
    isDotsModalOpen: false,
    isClothingStylesModalOpen: false,
    savingDot: false,
  };

  selectDotPlace = e => {
    this.setState({
      isDotsModalOpen: true,
      xPosition: e.nativeEvent.offsetX,
      yPosition: e.nativeEvent.offsetY,
    });
  };

  onSaveDot = async (persistDot, dotData) => {
    const { xPosition, xLength, yPosition, yLength } = this.state;
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
        isDotsModalOpen: false,
      });
    });
  };

  closeDotsModal = () => {
    this.setState({
      isDotsModalOpen: false,
      xPosition: 0,
      yPosition: 0,
    });
  };

  getImageSize = e => {
    this.setState({ xLength: e.target.clientWidth, yLength: e.target.clientHeight });
  };

  persistAndRedirect = async setClothingStyles => {
    const { postId, selectedClothingStyles } = this.props;
    await setClothingStyles({
      variables: { postId, clothingStyles: selectedClothingStyles.map(cs => cs.name) },
    });
    Router.pushRoute('feed');
  };

  openClothingStylesModal = () => {
    const { persistCurrentState } = this.props;

    persistCurrentState();
    this.setState({ isClothingStylesModalOpen: true });
  };

  closeClothingStylesModal = () => {
    this.setState({ isClothingStylesModalOpen: false });
  };

  render() {
    const {
      xPosition,
      xLength,
      yPosition,
      yLength,
      isDotsModalOpen,
      savingDot,
      isClothingStylesModalOpen,
    } = this.state;

    const {
      postId,
      post,
      clothingStyles,
      selectedClothingStyles,
      toggleStyleSelection,
      unselectStyle,
      unselectAll,
      persistCurrentState,
      backToPersistedState,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <EditDots
          selectDotPlace={this.selectDotPlace}
          existentDots={post.dots && post.dots.nodes}
          imageSizeX={xLength}
          imageSizeY={yLength}
          dotX={xPosition}
          dotY={yPosition}
          displayDot={xPosition + yPosition !== 0}
          getImageSize={this.getImageSize}
          picUrl={post.picUrl}
          postId={postId}
        />
        <Mutation mutation={Post.Mutations.ADD_DOT}>
          {addDot => (
            <DotsModal
              isOpen={isDotsModalOpen}
              close={this.closeDotsModal}
              onSaveDot={this.onSaveDot}
              savingDot={savingDot}
              persistDot={addDot}
            />
          )}
        </Mutation>
        <ClothingStylesModal
          isOpen={isClothingStylesModalOpen}
          close={this.closeClothingStylesModal}
          closeAndCancelSelection={() => {
            backToPersistedState();
            this.closeClothingStylesModal();
          }}
          clothingStyles={clothingStyles}
          onStyleClick={toggleStyleSelection}
        />
        <div className="content">
          <p>¡Toca sobre la imagen para empezar a agregar tus prendas!</p>
          <StylesSelect
            onClick={this.openClothingStylesModal}
            handleDelete={unselectStyle}
            selectedClothingStyles={selectedClothingStyles}
          />
          <Mutation mutation={Post.Mutations.SET_CLOTHING_STYLES}>
            {setClothingStyles => (
              <Button
                className="save"
                color="primary"
                variant="contained"
                onClick={() => this.persistAndRedirect(setClothingStyles)}
              >
                Guardar
              </Button>
            )}
          </Mutation>
        </div>
      </Container>
    );
  }
}

export default withMainLayout(withClothingStyles(EditPost));
