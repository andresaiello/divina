import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import { Image, Loader } from '~/components/shared';
import { Link } from '~/server/routes';
import { PROFILE_GET_POSTS } from '~/lib/queries';

const imageHeight = 80;

const StyledPhotoGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 32% 32% 32%;
  grid-row-gap: 5px;
  justify-content: space-between;

  .cardPic{
    width: calc(100vw / 3 - 8px);
    height: calc(100vw / 3 - 8px);
  }
`;

export default function PhotoGrid ({ userId, username }) {
  // @todo case: user has no posts
  return (
    <Query
      query={PROFILE_GET_POSTS}
      variables={{ _id: userId }}
    >
      {({ data, loading, error }) => {
        // @todo set a good error message
        if (error) return <div>Hubo un error</div>;
        if (loading) return <Loader height={imageHeight * 2} />;

        const { profilePosts } = data;

        // @todo: better empty message
        if (!profilePosts || profilePosts.length === 0) {
          return (
            <div style={{ textAlign: 'center' }}>
              Este usuario todavía no subió ninguna foto!
            </div>
          );
        }

        return (
          <StyledPhotoGrid>
            {profilePosts.map(post => (
              <Link route="pictureDetails" params={{ username, postId: post._id }} key={post._id} prefetch>
                <Image
                  className="cardPic"
                  fitCover
                  src={post.picUrl}
                  alt="Foto de perfil"
                />
              </Link>
            ))}
          </StyledPhotoGrid>
        );
      }}
    </Query>
  );
}

PhotoGrid.propTypes = {
  userId: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
};
