import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { People, PeopleOutlined, CameraAlt as Camera } from '@material-ui/icons';

import withRouteProgress from '~/HOCs/withRouteProgress';
import { FullscreenModal } from '~/components/shared/';
import { Query } from 'react-apollo';
import { PROFILE_GET_FOLLOWERS, PROFILE_GET_FOLLOWING } from '~/lib/queries';
import Loader from '~/components/shared/components/Loader';
import FollowersModal from './FollowersModal';
import FollowingModal from './FollowingModal';

const StyledProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
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
    margin: 0px auto;

    .icon {
      display: inline-block;
      text-align: center;
      margin: 4px 7px;

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
      action, username, profilePic, followersCount, followingCount, postsCount, ...rest
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
            <Camera />
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
