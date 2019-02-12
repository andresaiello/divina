import React, { Component, Fragment } from 'react';
import TimeAgo from 'javascript-time-ago';
import es from 'javascript-time-ago/locale/es';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {
  Card, CardHeader, CardContent, CardActions, Avatar, Typography, IconButton,
} from '@material-ui/core';
import {
  Comment, Favorite, Share, MoreVert,
} from '@material-ui/icons';

import { Link } from '~/server/routes';
import { Image, FollowButton } from '~/components/shared';

import CommentsModal from './CommentsModal';
import ShareModal from './ShareModal';

TimeAgo.addLocale(es);
const timeAgo = new TimeAgo('es');

const StyledCard = styled(Card)`
  margin: 5px auto;
  max-width: 400px;

  .profileName {
    display: inline-block;
  }

  .actions {
    justify-content: space-between;

    .liked {
      color: red;
    }
  }
`;

class PostCard extends Component {
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

  render () {
    const {
      _id, author: { username, profilePic }, picUrl, caption, createdAt,
    } = this.props;

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
              <FollowButton isFollowing={Math.random() < 0.5} />
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
            <IconButton aria-label="Like">
              <Favorite className={Math.random() < 0.5 ? 'liked' : ''} />
            </IconButton>
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
  author: propTypes.shape({
    username: propTypes.string.isRequired,
    profilePic: propTypes.string.isRequired,
  }).isRequired,
  _id: propTypes.string.isRequired,
  picUrl: propTypes.string.isRequired,
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
