import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar, Typography } from '@material-ui/core';
import { People, PeopleOutlined, ChatBubbleOutline as Chat } from '@material-ui/icons';

import FollowersModal from './FollowersModal';
import FollowingModal from './FollowingModal';

const StyledProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  margin: 10px;

  h2 {
    word-break: break-all;
  }

  .avatar {
    height: 70px;
    width: 70px;
  }

  .follow {
    text-align: center;

    .avatar {
      margin: 0px auto;
    }

    h2 {
      margin: 5px 9px;
      font-size: 1rem;
      font-weight: normal;
    }
  }

  .icons {
    margin: 0px auto;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    width: 100%;
    font-size: .8rem;

    .icon {
      display: inline-block;
      text-align: center;
      margin: 4px 7px 0px;

      &.action {
        cursor: pointer;
      }

      p {
        display: block;
        margin: 0;
      }
    }
  }

  .details {
    grid-column-start: span 2;
  }
`;

class ProfileInfo extends Component {
  static propTypes = {
    action: propTypes.element.isRequired,
    username: propTypes.string.isRequired,
    profilePic: propTypes.string.isRequired,
    postsCount: propTypes.number.isRequired,
    followersCount: propTypes.number.isRequired,
    followingCount: propTypes.number.isRequired,
  };

  state = {
    followersModalOpen: false,
    followingModalOpen: false,
  }

  openModal = (key) => {
    this.setState({ [key]: true });
  }

  closeModal = (key) => {
    this.setState({ [key]: false });
  }

  render () {
    const {
      action, username, name, description, profilePic, followersCount, followingCount, postsCount, ...rest
    } = this.props;

    const { followersModalOpen, followingModalOpen } = this.state;

    return (
      <StyledProfileInfo {...rest}>
        <FollowersModal
          isOpen={followersModalOpen}
          closeModal={this.closeModal}
          username={username}
        />
        <FollowingModal
          isOpen={followingModalOpen}
          closeModal={this.closeModal}
          username={username}
        />
        <div className="follow">
          <Avatar className="avatar" src={profilePic} alt="Foto de perfil" />
          <h2>{username}</h2>
          {action}
        </div>
        <div className="icons">
          <div
            className="icon"
            role="button"
            tabIndex={0}
          >
            <img width="32" src="/static/pinkBlackLogo.png" alt="Cámara" />
            <p>{postsCount === 1 ? '1 foto' : `${postsCount} fotos` }</p>
          </div>
          <div
            className="icon action"
            onClick={() => this.openModal('followersModalOpen')}
            role="button"
            tabIndex={0}
          >
            <People />
            <p>{followersCount === 1 ? '1 seguidor' : `${followersCount} seguidores` }</p>
          </div>
          <div
            className="icon action"
            onClick={() => this.openModal('followingModalOpen')}
            role="button"
            tabIndex={0}
          >
            <PeopleOutlined />
            <p>{followingCount === 1 ? '1 seguido' : `${followingCount} seguidos` }</p>
          </div>
          <div
            className="icon action"
            // onClick={() => this.openModal('followingModalOpen')}
            role="button"
            tabIndex={0}
          >
            <img width="30" src="/static/chat.png" alt="chat" />
            <p>{followingCount === 1 ? '1 chat' : `${followingCount} chats` }</p>
          </div>
          <div
            className="icon action"
            // onClick={() => this.openModal('followingModalOpen')}
            role="button"
            tabIndex={0}
          >
            <img width="32" src="/static/dot.png" alt="Dot" />
            <p>{followingCount === 1 ? '1 dot' : `${followingCount} dots` }</p>
          </div>
          <div
            className="icon action"
            // onClick={() => this.openModal('followingModalOpen')}
            role="button"
            tabIndex={0}
          >
            <img width="32" src="/static/closet.png" alt="Dot" />
            <p>{followingCount === 1 ? '1 estilo' : `${followingCount} estilos` }</p>
          </div>
        </div>
        <div className="details">
          <Typography component="p">{name}</Typography>
          <Typography component="p">{description}</Typography>
        </div>
      </StyledProfileInfo>
    );
  }
}

export default ProfileInfo;
