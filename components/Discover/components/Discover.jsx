import React, { useState } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import withMainLayout from '~/HOCs/withMainLayout';
import { Image, Loader, InfiniteScroll } from '~/components/shared';
import { Link } from '~/server/routes';
import { Discover as DiscoverGQL } from '~/lib/graphql';
import useClothingStyles from '~/Hooks/useClothingStyles';
import { isFetchingMore, isRefreshing } from '~/util';

import Filters from './Filters';
import DiscoverGrid from './DiscoverGrid';
import FilteredGrid from './FilteredGrid';
import DiscoverNode from './DiscoverNode';
import { fetchMorePosts, byClothingStyles } from '../helpers';

function Discover (props) {
  const clothingStylesData = useClothingStyles();
  const { selectedClothingStyles } = clothingStylesData;

  return (
    <>
      <Filters
        clothingStylesData={clothingStylesData}
      />
      <Query
        query={DiscoverGQL.Queries.GET_POSTS}
        notifyOnNetworkStatusChange
        variables={{ amount: 21 }}
      >
        {({
          data, loading, error, networkStatus, fetchMore,
        }) => {
          const noFilters = selectedClothingStyles.length === 0;
          if (loading && !isFetchingMore(networkStatus)) return <Loader />;
          if (error) return <div>Error</div>; // @todo
          const { posts } = data || { posts: null };
          const { nodes, pageInfo } = posts || { nodes: [], pageInfo: {} };

          if (noFilters) {
            return (
              <InfiniteScroll
                onScrollBottom={() => fetchMorePosts(
                  fetchMore,
                  !isFetchingMore(networkStatus) && pageInfo.hasNextPage,
                  { startingDate: pageInfo.lastCursor },
                )}
              >
                <DiscoverGrid {...props}>
                  {nodes.map(post => <DiscoverNode key={post._id} post={post} />)}
                </DiscoverGrid>
                {isFetchingMore(networkStatus) && <Loader height="150" />}
              </InfiniteScroll>
            );
          }

          return (
            <FilteredGrid
              basePosts={nodes.filter(byClothingStyles(selectedClothingStyles))}
              selectedClothingStyles={selectedClothingStyles}
            />
          );
        }}
      </Query>
    </>
  );
}

export default withMainLayout(Discover);
