import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';

import withMainLayout from '~/HOCs/withMainLayout';
import AddDots from './AddDots';
import DotsModal from './DotsModal';

const Container = styled.div`
  text-align: center;
`;

class EditPost extends Component {
  static propTypes = {
    postId: propTypes.string.isRequired,
    author: propTypes.shape({
      profilePic: propTypes.string.isRequired,
      username: propTypes.string.isRequired,
    }).isRequired,
    picUrl: propTypes.string.isRequired,
    caption: propTypes.string.isRequired,
  };

  state = {
    currentDotX: 0,
    currentDotY: 0,
    imageSize: null,
    dotsModalOpen: false,
  }

  selectDotPlace = (e) => {
    this.setState({
      dotsModalOpen: true,
      currentDotX: e.nativeEvent.offsetX,
      currentDotY: e.nativeEvent.offsetY,
    });
  }

  saveDotData = ({ brand, price }) => {
    this.setState({
      dotsModalOpen: false,
      currentDotX: 0,
      currentDotY: 0,
    });
  }

  closeDotsModal = () => {
    this.setState({
      dotsModalOpen: false,
      currentDotX: 0,
      currentDotY: 0,
    });
  }

  getImageSize = (e) => {
    this.setState({ imageSize: e.target.width });
  }

  render () {
    const { currentDotX, currentDotY, dotsModalOpen } = this.state;
    const {
      postId, author, comments, picUrl, caption, ...rest
    } = this.props;

    console.log(this.state);

    return (
      <Container {...rest}>
        <AddDots
          selectDotPlace={this.selectDotPlace}
          dotX={currentDotX}
          dotY={currentDotY}
          displayDot={currentDotX + currentDotY !== 0}
          getImageSize={this.getImageSize}
          picUrl={picUrl}
        />
        <p>¡Toca sobre la imagen para empezar a agregar tus dots!</p>
        <DotsModal
          isOpen={dotsModalOpen}
          close={this.closeDotsModal}
          saveDotData={this.saveDotData}
        />
        <Button
          className="save"
          color="primary"
          variant="contained"
        >
          Guardar
        </Button>
      </Container>
    );
  }
}


export default withMainLayout(EditPost);
