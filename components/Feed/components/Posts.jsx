import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { PostCard } from './PostCard';
import InfiniteScroll from './InfiniteScroll';
import PullToRefresh from './PullToRefresh';

const PostsContainer = styled.div`
`;

export default class Posts extends PureComponent {
  state = {
    isRefetching: false,
  }

  fetchMore = () => {
    const {
      fetchingMore, fetchMore, lastCursor, hasNextPage,
    } = this.props;

    const { isRefetching } = this.state;

    // prevent query if the user scrolls more than 1 time or there are no more items to show
    if (!fetchingMore && hasNextPage && !isRefetching) {
      fetchMore({
        variables: { startingDate: lastCursor, amount: 2 },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          return Object.assign({}, fetchMoreResult, {
            posts: { ...fetchMoreResult.posts, nodes: [...prev.posts.nodes, ...fetchMoreResult.posts.nodes] },
          });
        },
      });
    }
  };

  refetch = async () => new Promise((resolve, reject) => {
    const { refetch } = this.props;

    this.setState({ isRefetching: true }, async () => {
      try {
        await refetch();
        this.setState({ isRefetching: false });
        resolve();
      } catch (e) {
        reject();
      }
    });
  })

  render () {
    const { posts } = this.props;

    return (
      <PullToRefresh onRefresh={this.refetch}>
        <InfiniteScroll onScrollBottom={this.fetchMore}>
          <PostsContainer>
            {posts.map(({ id, picUrl, timestamp }) => <PostCard key={id} {...{ picUrl, timestamp }} />)}
          </PostsContainer>
        </InfiniteScroll>
      </PullToRefresh>
    );
  }
}
