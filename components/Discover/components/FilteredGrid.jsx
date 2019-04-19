import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import { Discover as DiscoverGQL } from '~/lib/graphql';
import { isFetchingMore } from '~/util';
import { Loader, InfiniteScroll } from '~/components/shared';

import DiscoverGrid from './DiscoverGrid';
import DiscoverNode from './DiscoverNode';
import { fetchMorePosts } from '../helpers';

export default function FilteredGrid ({ basePosts, selectedClothingStyles }) {
  const lastPost = basePosts[basePosts.length - 1];

  if (!lastPost) return null;

  const parsedClothingStyles = selectedClothingStyles.map(cs => cs.name);

  return (
    <Query
      query={DiscoverGQL.Queries.GET_POSTS}
      notifyOnNetworkStatusChange
      variables={{
        startingDate: lastPost.createdAt,
        amount: 9,
        clothingStyles: parsedClothingStyles,
      }}
    >
      {({
        data, loading, error, networkStatus, fetchMore,
      }) => {
        if (loading && !isFetchingMore(networkStatus)) return <Loader />;
        if (error) return <div>Error</div>; // @todo
        const { posts } = data || { posts: null };
        const { nodes, pageInfo } = posts || { nodes: [], pageInfo: {} };

        return (
          <InfiniteScroll
            onScrollBottom={() => fetchMorePosts(
              fetchMore,
              !isFetchingMore(networkStatus) && pageInfo.hasNextPage,
              { startingDate: pageInfo.lastCursor, clothingStyles: parsedClothingStyles },
            )}
          >
            <DiscoverGrid>
              {[...basePosts, ...nodes].map(post => <DiscoverNode key={post._id} post={post} />)}
              {isFetchingMore(networkStatus) && <Loader height="150" />}
            </DiscoverGrid>
          </InfiniteScroll>
        );
      }}
    </Query>
  );
}

FilteredGrid.defaultProps = {
  basePosts: [],
};

FilteredGrid.propTypes = {
  basePosts: propTypes.arrayOf(propTypes.shape({})),
};
