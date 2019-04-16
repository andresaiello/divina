import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import withRouteProgress from '~/HOCs/withRouteProgress';
import { Image, Comments, ShareModal } from '~/components/shared';
import SecContext from '~/context/secContext';

import Head from './Head';
import SubBar from './SubBar';

const StyledPictureDetails = styled.article`
  height: 100vh;

  .image {
    height: 100vw;
  }
`;

function PictureDetails ({
  postId, author, comments, picUrl, caption, likes, liked, ...rest
}) {
  const context = useContext(SecContext);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const openShareModal = () => { setIsShareModalOpen(true); };
  const closeShareModal = () => { setIsShareModalOpen(false); };

  const loggedUserId = context.user && context.user._id;

  return (
    <StyledPictureDetails {...rest}>
      <Head {...{ ...author }} />
      <Image
        className="image"
        fitCover
        withLoader
        src={picUrl}
        alt="Post"
      />
      <SubBar
        caption={caption}
        likes={likes}
        postId={postId}
        loggedUserId={loggedUserId}
        liked={liked.isLiked}
        openShareModal={openShareModal}
      />
      <Comments postId={postId} />
      <ShareModal
        username={author.username}
        postId={postId}
        isOpen={isShareModalOpen}
        close={closeShareModal}
      />
    </StyledPictureDetails>
  );
}

PictureDetails.propTypes = {
  postId: propTypes.string.isRequired,
  author: propTypes.shape({
    profilePic: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
  }).isRequired,
  picUrl: propTypes.string.isRequired,
  caption: propTypes.string.isRequired,
  liked: propTypes.shape({
    _id: propTypes.string.isRequired,
    isLiked: propTypes.bool.isRequired,
  }).isRequired,
  likes: propTypes.shape({
    _id: propTypes.string.isRequired,
    nodes: propTypes.arrayOf(propTypes.shape({
      username: propTypes.string,
      profilePic: propTypes.string,
    })).isRequired,
  }).isRequired,
};

export default withRouteProgress(PictureDetails);
