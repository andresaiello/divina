import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import { isFetchingMore, isRefreshing } from '~/util';
import { FEED_GET_POSTS } from '~/lib/queries';
import withMainLayout from '~/HOCs/withMainLayout';

import { Loader } from '../../shared';
import Posts from './Posts';

const StyledFeed = styled.div`

`;

class Feed extends Component {
  render () {
    return (
      <Query
        query={FEED_GET_POSTS}
        notifyOnNetworkStatusChange
        variables={{ amount: 2 }}
      >
        {({
          data, error, loading, refetch, networkStatus, fetchMore,
        }) => {
          let loader = null;
          let errorMessage = null;
          const { posts } = data || { posts: null };
          const { nodes, pageInfo } = posts || { nodes: [], pageInfo: {} };
          if (loading) loader = <Loader height="150" />;
          // @todo set a good error message
          if (error) errorMessage = <div>Error!</div>;

          // @todo set refetch when pulling down
          if (isRefreshing(networkStatus)) return 'Refetching!';

          return (
            <StyledFeed>
              <Posts
                fetchingMore={isFetchingMore(networkStatus)}
                posts={nodes}
                lastCursor={pageInfo.lastCursor}
                hasNextPage={pageInfo.hasNextPage}
                {...{
                  fetchMore, refetch, pageInfo,
                }}
              />
              {loader}
              {errorMessage}
            </StyledFeed>
          );
        }}
      </Query>
    );
  }
}

export default withMainLayout(Feed);
