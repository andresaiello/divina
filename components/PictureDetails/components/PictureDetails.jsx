import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import withRouteProgress from '~/HOCs/withRouteProgress';
import {
  Comments,
  ShareModal,
  MoreOptionsModal,
  ImageWithDots,
  DotDetailsModal,
} from '~/components/shared';
import SecContext from '~/context/secContext';

import Head from './Head';
import SubBar from './SubBar';

const StyledPictureDetails = styled.article`
  height: 100vh;

  .image {
    height: 100vw;
  }
`;

function PictureDetails({
  postId,
  author,
  dots,
  comments,
  picUrl,
  caption,
  likes,
  liked,
  ...rest
}) {
  const { user } = useContext(SecContext);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isMoreOptionsModalOpen, setIsMoreOptionsModalOpen] = useState(false);
  const [dotModalData, setDotModalData] = useState({ dotData: null, isOpen: false });

  const setModalStatus = (modal, status) => dotData => {
    switch (modal) {
      case 'share':
        setIsShareModalOpen(status);
        break;
      case 'moreOptions':
        setIsMoreOptionsModalOpen(status);
        break;
      case 'dots':
        setDotModalData({ dotData, isOpen: status });
        break;
      default:
    }
  };

  const loggedUserId = user && user._id;

  return (
    <StyledPictureDetails {...rest}>
      <Head {...{ ...author }} openMoreOptionsModal={setModalStatus('moreOptions', true)} />
      <ImageWithDots
        className="image"
        fitCover
        onDotLinkClick={setModalStatus('dots', true)}
        postId={postId}
        dots={dots.nodes}
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
        openShareModal={setModalStatus('share', true)}
      />
      <Comments postId={postId} />
      <DotDetailsModal
        isOpen={dotModalData.isOpen}
        onClose={setModalStatus('dots', false)}
        dotData={dotModalData.dotData}
      />
      <ShareModal
        username={author.username}
        postId={postId}
        isOpen={isShareModalOpen}
        close={setModalStatus('share', false)}
      />
      <MoreOptionsModal
        postId={postId}
        isOwner={loggedUserId === author._id}
        isOpen={isMoreOptionsModalOpen}
        close={setModalStatus('moreOptions', false)}
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
    nodes: propTypes.arrayOf(
      propTypes.shape({
        username: propTypes.string,
        profilePic: propTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

export default withRouteProgress(PictureDetails);
