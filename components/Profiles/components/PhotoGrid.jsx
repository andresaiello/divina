import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import { Image } from '~/components/shared';
import { Link } from '~/server/routes';
import { PROFILE_GET_POSTS } from '~/lib/queries';
import Loader from '~/components/shared/components/Loader';

const imageHeight = 155;

const StyledPhotoGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 32% 32% 32%;
  grid-row-gap: 5px;
  justify-content: space-between;
`;

export default function PhotoGrid ({ username }) {
  // @todo case: user has no posts
  return (
    <Query
      query={PROFILE_GET_POSTS}
      variables={{ username }}
    >
      {({ data, loading, error }) => {
        // @todo set a good error message
        if (error) return <div>Hubo un error</div>;
        if (loading) return <Loader height={imageHeight * 3} />;

        const { posts } = data;
        const { nodes } = posts || { nodes: [] };

        return (
          <StyledPhotoGrid>
            {nodes.map(post => (
              <Link route="pictureDetails" params={{ postId: post.picUrl }} key={post.id} prefetch>
                <Image
                  height={imageHeight}
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
