import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {
  Card, CardHeader, CardContent, CardActions, Avatar, Typography, IconButton,
} from '@material-ui/core';
import {
  Comment, Share, MoreHoriz as More,
} from '@material-ui/icons';

import SecContext from '~/context/secContext';
import { Link } from '~/server/routes';
import {
  FollowButton, LikeButton, ImageWithDots, ShareModal,
} from '~/components/shared';

import CommentsModal from './CommentsModal';
import DotDetailsModal from './DotDetailsModal';
import { POST_MAX_WIDTH } from '~/constants';

const StyledCard = styled(Card)`
  margin: 0px auto;
  border-bottom: 1px solid #9B9B9B;
  box-shadow: none;
  max-width: ${POST_MAX_WIDTH}px;
  border-radius: 0;

  :first-child {
    border-top: 1px solid #9B9B9B;
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

  .moreButton {
    padding: 24px 12px 0px 12px;
  }
`;

class PostCard extends PureComponent {
  static contextType = SecContext;

  state = {
    isCommentsModalOpen: false,
    isShareModalOpen: false,
    isDotDetailsModalOpen: false,
    selectedDotData: null,
  }

  openCommentsModal = () => {
    this.setState({ isCommentsModalOpen: true });
  };

  closeCommentsModal = () => {
    this.setState({ isCommentsModalOpen: false });
  };

  openShareModal = () => {
    this.setState({ isShareModalOpen: true });
  };

  closeShareModal = () => {
    this.setState({ isShareModalOpen: false });
  };

  openDotDetailsModal = (dotData) => {
    this.setState({
      selectedDotData: dotData,
      isDotDetailsModalOpen: true,
    });
  };

  closeDotDetailsModal = () => {
    this.setState({
      selectedDotData: null,
      isDotDetailsModalOpen: false,
    });
  };

  render () {
    const {
      _id, liked, authorFollowed, dots, author, picUrl, caption, createdAt,
    } = this.props;

    const { username, profilePic } = author;

    const { user = {} } = this.context;

    const {
      isCommentsModalOpen, isShareModalOpen, isDotDetailsModalOpen, selectedDotData,
    } = this.state;

    const screenWidth = process.browser ? Math.max(document.documentElement.clientWidth, window.innerWidth || 0) : 450;
    const postHeight = screenWidth <= POST_MAX_WIDTH ? '100vw' : `${POST_MAX_WIDTH}px`;

    return (
      <StyledCard>
        <CardHeader
          className="header"
          classes={{
            action: 'followMore',
            avatar: 'avatar',
            title: 'title',
          }}
          avatar={(
            <Link route="profile" params={{ username }} prefetch>
              <Avatar className="avatarPic" alt="avatar" src={profilePic} />
            </Link>
          )}
          title={(
            <Link route="profile" params={{ username }} prefetch>
              <Typography variant="h6" className="profileName">{username}</Typography>
            </Link>
          )}
          action={(
            <Fragment>
              <FollowButton
                className="follow"
                author={user && user._id}
                receiver={author._id}
                isFollowing={authorFollowed.isFollowing}
              />
              <IconButton className="moreButton">
                <More />
              </IconButton>
            </Fragment>
          )}
        />
        <ImageWithDots
          className="cardPic"
          fitCover
          onDotLinkClick={this.openDotDetailsModal}
          src={picUrl}
          height={postHeight}
          postId={_id}
          withLoader
          dots={dots.nodes}
          alt="Foto"
        />
        <DotDetailsModal
          isOpen={isDotDetailsModalOpen}
          onClose={this.closeDotDetailsModal}
          dotData={selectedDotData}
        />
        <CardContent className="caption">
          <Typography component="p">
            {caption}
          </Typography>
        </CardContent>
        <CardActions className="actions" disableActionSpacing>
          <div>
            <LikeButton
              author={user && user._id}
              liked={liked.isLiked}
              postId={_id}
            />
            <IconButton onClick={this.openCommentsModal} aria-label="Comment">
              <Comment />
            </IconButton>
          </div>
          <IconButton onClick={this.openShareModal} aria-label="Share">
            <Share />
          </IconButton>
        </CardActions>
        <CommentsModal postId={_id} isOpen={isCommentsModalOpen} close={this.closeCommentsModal} />
        <ShareModal username={username} postId={_id} isOpen={isShareModalOpen} close={this.closeShareModal} />
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
