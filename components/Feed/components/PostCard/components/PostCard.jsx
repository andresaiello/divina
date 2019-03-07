import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {
  Card, CardHeader, CardContent, CardActions, Avatar, Typography, IconButton,
} from '@material-ui/core';
import {
  Comment, Share, MoreVert,
} from '@material-ui/icons';

import SecContext from '~/context/secContext';
import timeAgo from '~/lib/timeAgo';
import { Link } from '~/server/routes';
import {
  Image, FollowButton, LikeButton, ImageWithDots,
} from '~/components/shared';

import CommentsModal from './CommentsModal';
import DotDetailsModal from './DotDetailsModal';
import ShareModal from './ShareModal';

const StyledCard = styled(Card)`
  margin: 5px auto;
  max-width: 450px;

  .profileName {
    display: inline-block;
  }

  .actions {
    justify-content: space-between;
  }

  .cardPic{
    height: 100vw;
  }
`;

class PostCard extends Component {
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

    return (
      <StyledCard>
        <CardHeader
          avatar={(
            <Link route="profile" params={{ username }} prefetch>
              <Avatar alt="avatar" src={profilePic} />
            </Link>
          )}
          action={(
            <Fragment>
              <FollowButton
                author={user && user._id}
                receiver={author._id}
                isFollowing={authorFollowed.isFollowing}
              />
              <IconButton>
                <MoreVert />
              </IconButton>
            </Fragment>
          )}
          title={(
            <Link route="profile" params={{ username }} prefetch>
              <div className="profileName">{username}</div>
            </Link>
          )}
          subheader={timeAgo.format(parseInt(createdAt, 10))}
        />
        <ImageWithDots
          className="cardPic"
          height="350"
          fitCover
          onDotLinkClick={this.openDotDetailsModal}
          src={picUrl}
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
        <CardContent>
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
    _id: propTypes.string.isRequired,
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
