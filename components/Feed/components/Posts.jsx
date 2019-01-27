import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { PostCard } from './PostCard';

const PostsContainer = styled.div`
  .noMorePosts {
    height: 5vh;
    text-align: center;
    color: red;
    font-weight: bold;
  }
`;

export default class Posts extends PureComponent {
  state = {
    hasMore: true,
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  handleOnScroll = () => {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop)
      || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight)
      || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      const {
        fetchingMore, fetchMore, lastCursor, hasNextPage,
      } = this.props;

      // prevent query if the user scrolls more than 1 time or there are no more items to show
      if (!fetchingMore && hasNextPage) {
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
    }
  };

  render () {
    const { posts, hasNextPage } = this.props;

    return (
      <PostsContainer>
        {posts.map(({ id, picUrl }) => <PostCard key={id} {...{ picUrl }} />)}
        {hasNextPage ? null : <div className="noMorePosts">The end...</div>}
      </PostsContainer>
    );
  }
}
