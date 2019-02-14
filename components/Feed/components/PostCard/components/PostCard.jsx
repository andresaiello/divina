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
import { Image, FollowButton, LikeButton } from '~/components/shared';
import { FEED_GET_POSTS } from '~/lib/queries';

import CommentsModal from './CommentsModal';
import ShareModal from './ShareModal';

const StyledCard = styled(Card)`
  margin: 5px auto;
  max-width: 400px;

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

  followCacheUpdate = (cache, { data }) => {
    const prevQuery = cache.readQuery({ query: FEED_GET_POSTS, variables: { amount: 2 } });

    const newNodes = prevQuery.posts.nodes.map((n) => {
      if (n.author._id === data.followUser._id) return { ...n, authorFollowed: true };
      return n;
    });

    cache.writeQuery({
      query: FEED_GET_POSTS,
      variables: { amount: 2 },
      data: { ...prevQuery, posts: { ...prevQuery.posts, nodes: newNodes } },
    });
  }

  unfollowCacheUpdate = (cache, { data }) => {
    const prevQuery = cache.readQuery({ query: FEED_GET_POSTS, variables: { amount: 2 } });

    const newNodes = prevQuery.posts.nodes.map((n) => {
      if (n.author._id === data.unfollowUser._id) return { ...n, authorFollowed: false };
      return n;
    });

    cache.writeQuery({
      query: FEED_GET_POSTS,
      variables: { amount: 2 },
      data: { ...prevQuery, posts: { ...prevQuery.posts, nodes: newNodes } },
    });
  }

  render () {
    const {
      _id, liked, authorFollowed, author, picUrl, caption, createdAt,
    } = this.props;

    const { username, profilePic } = author;

    const { user = {} } = this.context;

    const { isCommentsModalOpen, isShareModalOpen } = this.state;

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
                isFollowing={authorFollowed}
                followCacheUpdate={this.followCacheUpdate}
                unfollowCacheUpdate={this.unfollowCacheUpdate}
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
        <Image
          className="cardPic"
          height="350"
          fitCover
          src={picUrl}
          withLoader
          alt="Foto"
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
              liked={liked}
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
  liked: propTypes.bool.isRequired,
  authorFollowed: propTypes.bool.isRequired,
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
