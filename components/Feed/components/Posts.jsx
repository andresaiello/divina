import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { InfiniteScroll } from '~/components/shared';

import PostCard from './PostCard';
import PullToRefresh from './PullToRefresh';

const PostsContainer = styled.div``;

export default class Posts extends PureComponent {
  state = {
    isRefetching: false,
  };

  fetchMore = () => {
    const { fetchingMore, fetchMore, lastCursor, hasNextPage } = this.props;

    const { isRefetching } = this.state;

    // prevent query if the user scrolls more than 1 time or there are no more items to show
    if (!fetchingMore && hasNextPage && !isRefetching) {
      fetchMore({
        variables: { startingDate: lastCursor, amount: 4 },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          return Object.assign({}, fetchMoreResult, {
            posts: {
              ...fetchMoreResult.posts,
              nodes: [...prev.posts.nodes, ...fetchMoreResult.posts.nodes],
            },
          });
        },
      });
    }
  };

  refetch = async () =>
    new Promise((resolve, reject) => {
      const { refetch } = this.props;

      this.setState({ isRefetching: true }, async () => {
        try {
          await refetch();
          this.setState({ isRefetching: false });
          resolve();
        } catch (e) {
          console.log(e);
          this.setState({ isRefetching: false });
          reject();
        }
      });
    });

  render() {
    const { posts } = this.props;

    return (
      <PullToRefresh onRefresh={this.refetch}>
        <InfiniteScroll onScrollBottom={this.fetchMore}>
          <PostsContainer>
            {posts.map(
              ({ _id, liked, authorFollowed, dots, author, picUrl, caption, createdAt }) => (
                <PostCard
                  key={_id}
                  {...{
                    _id,
                    liked,
                    authorFollowed,
                    dots,
                    author,
                    picUrl,
                    caption,
                    createdAt,
                  }}
                />
              ),
            )}
          </PostsContainer>
        </InfiniteScroll>
      </PullToRefresh>
    );
  }
}
