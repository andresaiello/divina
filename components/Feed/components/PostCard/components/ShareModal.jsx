import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { ListItemAvatar, Avatar } from '@material-ui/core';

import SecContext from '~/context/secContext';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {
  FaFacebookF, FaWhatsapp, FaTwitter, FaEnvelope,
} from 'react-icons/fa';

const StyledDialog = styled(Dialog)`
  && {
    a {
      text-decoration: none;
    }

    #share-title {
      border-bottom: 1px solid #efefef;
    }

    #share-title h6 {
      font-family: Roboto,Helvetica,Arial,sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      text-align: center;
    }

    a.share-link {
      text-decoration: none;
    }

    .share-link span {
      color: #262626;
      font-weight: 600;
    }

    .avatar-facebook {
      background-color: #3b5999;
    }

    .avatar-whatsapp {
      background-color: #25D366;
    }

    .avatar-twitter {
      background-color: #55acee;
    }

    .avatar-email {

    }

    .cancel-button span {
      color: #3897f0;
      font-weight: 600;
      margin-left: 55px;
    }
  }
`;

class ShareModal extends Component {
  static contextType = SecContext;

  static propTypes = {
    username: propTypes.string.isRequired,
    postId: propTypes.string.isRequired,
    isOpen: propTypes.bool.isRequired,
    close: propTypes.func.isRequired,
  };

  render () {
    const {
      isOpen, postId, close, username,
    } = this.props;
    const { user } = this.context;
    const url = 'http://localhost:3004/foto/aaiello/5c61ac925bd5ef0017f83d8e';

    const fbId = '1217981644879628'; // @todo FAKE!!!

    return (
      <StyledDialog open={isOpen} onClose={close} aria-labelledby="share-title">
        <DialogTitle id="share-title">Compartir</DialogTitle>
        <div>
          <List>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?app_id=${fbId}&u=${encodeURI(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-link"
            >
              <ListItem button>
                <ListItemAvatar>
                  <Avatar className="avatar-facebook">
                    <FaFacebookF />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Compartir en Facebook" />
              </ListItem>
            </a>
            <a
              href={`whatsapp://send/?text=Ver%20esta%20foto%20de%20Divina%20de%20%40${username}%3A%20${encodeURI(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-link"
            >
              <ListItem button>
                <ListItemAvatar>
                  <Avatar className="avatar-whatsapp">
                    <FaWhatsapp />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Compartir en Whatsapp" />
              </ListItem>
            </a>
            <a
              href={`https://twitter.com/share?text=Ver%20esta%20foto%20de%20Divina%20de%20%40${username}&url=${encodeURI(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-link"
            >
              <ListItem button>
                <ListItemAvatar>
                  <Avatar className="avatar-twitter">
                    <FaTwitter />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Compartir en Twitter" />
              </ListItem>
            </a>
            <a
              href={`mailto:?subject=Ver%20esta%20foto%20de%Divina%20de%20%40${username}&body=Ver%20esta%20foto%20de%20Divina%20de%20%40${username}%3A%20${encodeURI(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-link"
            >
              <ListItem button>
                <ListItemAvatar>
                  <Avatar className="avatar-email">
                    <FaEnvelope />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Compartir por correo electrónico" />
              </ListItem>
            </a>
            <ListItem button className="cancel-button" onClick={close}>
              <ListItemText primary="Cancelar" />
            </ListItem>
          </List>
        </div>
      </StyledDialog>
    );
  }
}

export default ShareModal;
