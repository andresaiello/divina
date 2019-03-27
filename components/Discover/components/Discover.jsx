import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import { Image, SearchBar, Loader } from '~/components/shared';
import { Link } from '~/server/routes';
import { Discover as DiscoverGQL } from '~/lib/graphql';

import withMainLayout from '~/HOCs/withMainLayout';

const DiscoverGrid = styled.div`
  display: grid;
  width: 100%;
  margin-top: 5px;
  grid-template-columns: 32.5% 32.5% 32.5%;
  grid-row-gap: 5px;
  justify-content: space-between;

  .img {
    :nth-child(4) {
      grid-row: 1 / span 2;
      grid-column: 2 / span 2;
    }
  }
`;

function Discover (props) {
  return (
    <Fragment>
      <Query
        query={DiscoverGQL.Queries.GET_POSTS}
        variables={{ amount: 20 }}
      >
        {({ data, loading, error }) => (
          loading
            ? <Loader />
            : error
              ? <div>Error</div> // @todo
              : (
                  <>
                    {/* <SearchBar /> */}
                    <DiscoverGrid {...props}>
                      {data.posts.nodes.map(post => (
                        <Link
                          key={post._id}
                          route="pictureDetails"
                          params={{ username: post.author.username, postId: post._id }}
                        >
                          <Image
                            className="img"
                            src={post.picUrl}
                            alt="Foto de perfil"
                          />
                        </Link>
                      ))}
                    </DiscoverGrid>
                </>
              )
        )}
      </Query>
    </Fragment>
  );
}

export default withMainLayout(Discover);
