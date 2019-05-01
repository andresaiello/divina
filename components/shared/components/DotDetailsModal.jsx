import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Typography, Modal, Button } from '@material-ui/core';
import { formatPrice } from '~/util';
import { POST_MAX_WIDTH } from '~/constants';

function getModalStyle() {
  const top = 63;

  return {
    top: `${top}%`,
    margin: 'auto',
  };
}

const StyledModal = styled(Modal)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;

    .backdrop {
      background-color: transparent;
    }

    .paper {
      position: absolute;
      border-radius: 3px;
      width: 80vw;
      max-width: ${POST_MAX_WIDTH}px;
      background-color: white;
      padding: 10px;
      box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14),
        0px 1px 14px 0px rgba(0, 0, 0, 0.12);
      outline: none;

      .price {
        margin: 0;
        font-weight: bold;
      }

      .button {
        background: black;
        margin: 10px 0 3px;
        color: white;
      }
    }
  }
`;

function DotDetailsModal({ isOpen, onClose, container, dotData }) {
  if (!dotData || !dotData.price) return null;

  return (
    <StyledModal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isOpen}
      BackdropProps={{
        className: 'backdrop',
      }}
      onClose={onClose}
    >
      <div style={getModalStyle()} className="paper">
        <p className="price">{formatPrice(dotData.price, dotData.currency)}</p>
        <p>{dotData.title}</p>
        <Typography variant="subtitle1" id="simple-modal-description">
          {dotData.brand.name}
        </Typography>
        <a
          className="action"
          target="_blank"
          rel="noopener noreferrer"
          href={dotData.brand.website}
        >
          <Button variant="outlined" className="button">
            Comprar
          </Button>
        </a>
      </div>
    </StyledModal>
  );
}

// class SimpleModal extends React.Component {
//   state = {
//     open: false,
//   };

//   handleOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   render () {
//     const { classes } = this.props;
//   }
// }

// SimpleModal.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// We need an intermediary variable for handling the recursive nesting.

export default DotDetailsModal;
