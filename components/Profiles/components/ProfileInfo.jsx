import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { People, PeopleOutlined } from '@material-ui/icons';

import withRouteProgress from '~/HOCs/withRouteProgress';
import { FullscreenModal } from '~/components/shared/';

const StyledProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 10px;

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
    margin-left: auto;

    .icon {
      display: inline-block;
      text-align: center;
      margin: 4px 7px;

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
    followers: propTypes.number.isRequired,
    following: propTypes.number.isRequired,
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
      action, username, profilePic, followers, following, ...rest
    } = this.props;

    const { followersModalOpen, followingModalOpen } = this.state;

    return (
      <StyledProfileInfo {...rest}>
        <FullscreenModal
          title="Seguidores"
          isOpen={followersModalOpen}
          close={() => this.closeModal('followersModalOpen')}
        >
          <div>Seguidor 1</div>
          <div>Seguidor 2</div>
        </FullscreenModal>
        <FullscreenModal
          title="Siguiendo"
          isOpen={followingModalOpen}
          close={() => this.closeModal('followingModalOpen')}
        >
          <div>Seguido 1</div>
          <div>Seguido 2</div>
        </FullscreenModal>
        <div className="follow">
          <Avatar className="avatar" src={profilePic} alt="Foto de perfil" />
          <h2>{username}</h2>
          {action}
        </div>
        <div className="icons">
          <div
            className="icon"
            onClick={() => this.openModal('followersModalOpen')}
            role="button"
            tabIndex={0}
          >
            <People />
            <p>{`${followers} siguiendo`}</p>
          </div>
          <div
            className="icon"
            onClick={() => this.openModal('followingModalOpen')}
            role="button"
            tabIndex={0}
          >
            <PeopleOutlined />
            <p>{following === 1 ? '1 seguido' : `${followers} seguidos` }</p>
          </div>
        </div>
        <div className="details">
          <div>Hola</div>
          <div>Me gusta la moda</div>
        </div>
      </StyledProfileInfo>
    );
  }
}

export default ProfileInfo;
