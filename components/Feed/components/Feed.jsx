import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import { isFetchingMore, isRefreshing } from '~/util';
import { Feed as FeedGQL } from '~/lib/graphql';
import withMainLayout from '~/HOCs/withMainLayout';
import { Loader } from '~/components/shared';

import Posts from './Posts';

const StyledFeed = styled.div`

`;

function Feed (props) {
  return (
    <Query
      query={FeedGQL.Queries.GET_POSTS}
      notifyOnNetworkStatusChange
      variables={{ amount: 4 }}
    >
      {({
        data, error, loading, refetch, networkStatus, fetchMore,
      }) => {
        let loader = null;
        let errorMessage = null;
        const { posts } = data || { posts: null };
        const { nodes, pageInfo } = posts || { nodes: [], pageInfo: {} };
        // shows the loader only if the user is fetching more content (scrolling) and not refreshing (pull up)
        if (loading && !isRefreshing(networkStatus)) loader = <Loader height="150" />;
        // @todo set a good error message
        if (error) errorMessage = <div>Error!</div>;

        // @todo add timeout and no connection error message to refetch and fetch more

        return (
          <StyledFeed {...props}>
            <Posts
              fetchingMore={isFetchingMore(networkStatus)}
              posts={nodes}
              lastCursor={pageInfo.lastCursor}
              hasNextPage={pageInfo.hasNextPage}
              {...{ fetchMore, refetch, pageInfo }}
            />
            {loader}
            {errorMessage}
          </StyledFeed>
        );
      }}
    </Query>
  );
}

export default withMainLayout(Feed);
