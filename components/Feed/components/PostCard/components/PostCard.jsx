import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  IconButton,
} from '@material-ui/core';
import { Comment, Share } from '@material-ui/icons';

import SecContext from '~/context/secContext';
import { Link } from '~/server/routes';
import {
  FollowButton,
  LikeButton,
  ImageWithDots,
  ShareModal,
  MoreOptionsModal,
  MoreOptionsButton,
  DotDetailsModal,
} from '~/components/shared';

import CommentsModal from './CommentsModal';
import { POST_MAX_WIDTH } from '~/constants';

const StyledCard = styled(Card)`
  margin: 0px auto;
  border-bottom: 1px solid #9b9b9b;
  box-shadow: none;
  max-width: ${POST_MAX_WIDTH}px;
  border-radius: 0;

  :first-child {
    border-top: 1px solid #9b9b9b;
  }

  .header {
    padding: 4px 16px 0px;
  }

  .profileName {
    display: inline-block;
  }

  h6 {
    font-size: 1rem;
  }

  .follow {
    margin-bottom: 6px;
  }

  .avatar {
    .avatarPic {
      position: absolute;
      z-index: 100;
      border: 1px solid white;
    }
  }

  .caption {
    padding: 4px 16px 0px;
  }

  .title {
    margin-left: 27px;
    margin-top: 15px;
  }

  .actions {
    justify-content: space-between;
    padding: 0;
  }

  .followMore {
    align-self: flex-end;
    display: flex;
    align-items: flex-end;
  }
`;

class PostCard extends PureComponent {
  static contextType = SecContext;

  state = {
    isCommentsModalOpen: false,
    isShareModalOpen: false,
    isDotDetailsModalOpen: false,
    isMoreOptionsModalOpen: false,
    selectedDotData: null,
  };

  setModalStatus = (modal, status) => dotData => {
    switch (modal) {
      case 'share':
        this.setState({ isShareModalOpen: status });
        break;
      case 'comments':
        this.setState({ isCommentsModalOpen: status });
        break;
      case 'moreOptions':
        this.setState({ isMoreOptionsModalOpen: status });
        break;
      case 'dots':
        this.setState({
          selectedDotData: dotData,
          isDotDetailsModalOpen: status,
        });
        break;
      default:
    }
  };

  render() {
    const { _id, liked, authorFollowed, dots, author, picUrl, caption, createdAt } = this.props;

    const { username, profilePic } = author;

    const { user } = this.context;

    const {
      isCommentsModalOpen,
      isShareModalOpen,
      isDotDetailsModalOpen,
      selectedDotData,
      isMoreOptionsModalOpen,
    } = this.state;

    const screenWidth = process.browser
      ? Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      : 450;
    const postHeight = screenWidth <= POST_MAX_WIDTH ? '100vw' : `${POST_MAX_WIDTH}px`;
    const loggedUserId = user && user._id;

    return (
      <StyledCard>
        <CardHeader
          className="header"
          classes={{
            action: 'followMore',
            avatar: 'avatar',
            title: 'title',
          }}
          avatar={
            <Link route="profile" params={{ username }} prefetch>
              <Avatar className="avatarPic" alt="avatar" src={profilePic} />
            </Link>
          }
          title={
            <Link route="profile" params={{ username }} prefetch>
              <Typography variant="h6" className="profileName">
                {username}
              </Typography>
            </Link>
          }
          action={
            <Fragment>
              <FollowButton
                className="follow"
                author={loggedUserId}
                receiver={author._id}
                isFollowing={authorFollowed.isFollowing}
              />
              <MoreOptionsButton openModal={this.setModalStatus('moreOptions', true)} />
            </Fragment>
          }
        />
        <ImageWithDots
          className="cardPic"
          fitCover
          onDotLinkClick={this.setModalStatus('dots', true)}
          src={picUrl}
          postId={_id}
          withLoader
          dots={dots.nodes}
          alt="Foto"
        />
        <DotDetailsModal
          isOpen={isDotDetailsModalOpen}
          onClose={this.setModalStatus('dots', false)}
          dotData={selectedDotData}
        />
        <CardContent className="caption">
          <Typography component="p">{caption}</Typography>
        </CardContent>
        <CardActions className="actions" disableActionSpacing>
          <div>
            <LikeButton author={loggedUserId} liked={liked.isLiked} postId={_id} />
            <IconButton onClick={this.setModalStatus('comments', true)} aria-label="Comment">
              <Comment />
            </IconButton>
          </div>
          <IconButton onClick={this.setModalStatus('share', true)} aria-label="Share">
            <Share />
          </IconButton>
        </CardActions>
        <CommentsModal
          postId={_id}
          isOpen={isCommentsModalOpen}
          close={this.setModalStatus('comments', false)}
        />
        <ShareModal
          username={username}
          postId={_id}
          isOpen={isShareModalOpen}
          close={this.setModalStatus('share', false)}
        />
        <MoreOptionsModal
          isOwner={loggedUserId === author._id}
          postId={_id}
          isOpen={isMoreOptionsModalOpen}
          close={this.setModalStatus('moreOptions', false)}
        />
      </StyledCard>
    );
  }
}

PostCard.propTypes = {
  _id: propTypes.string.isRequired,
  picUrl: propTypes.string.isRequired,
  liked: propTypes.shape({
    _id: propTypes.string,
    isLiked: propTypes.bool.isRequired,
  }).isRequired,
  authorFollowed: propTypes.shape({
    _id: propTypes.string.isRequired,
    isFollowing: propTypes.bool.isRequired,
  }).isRequired,
  author: propTypes.shape({
    _id: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    profilePic: propTypes.string.isRequired,
  }).isRequired,
  caption: propTypes.string.isRequired,
  createdAt: propTypes.string.isRequired,
  // comments: propTypes.shape({
  //   nodes: propTypes.arrayOf(propTypes.shape({
  //     _id: propTypes.string,
  //     author: propTypes.shape({
  //       username: propTypes.string.isRequired,
  //       profilePic: propTypes.string.isRequired,
  //     }),
  //     content: propTypes.string,
  //     createdAt: propTypes.string,
  //   })),
  // }),
};

export default PostCard;
