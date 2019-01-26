import React, { Component } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ArrowDropDown } from '@material-ui/icons';

import withMainLayout from '~/HOCs/withMainLayout';
import { getPosts } from '~/lib/api';

import { PostCard } from './PostCard';
import Loader from '../../shared/components/Loader';

const Container = styled.div`
  padding-top: ${({ isRefreshing }) => (isRefreshing ? '5px' : '0px')};
`;

class Feed extends Component {
  state = {
    posts: [{ id: Math.random() }, { id: Math.random() }, { id: Math.random() }],
    isRefreshing: false,
  }

  getPosts = async () => {
    /* eslint-disable-next-line */
    const newPosts = await getPosts({ from: this.state.posts.length });

    this.setState(({ posts }) => ({ posts: [...posts, newPosts] }));
  }

  refresh = async () => {
    this.setState({ isRefreshing: true });
    let posts;
    try {
      posts = await getPosts({ from: 0 });
    } catch (e) {
      console.log('@TODO do something with error fetching posts');
      this.setState({ posts: [], isRefreshing: false });
    }

    this.setState({ posts, isRefreshing: false });
  }

  render () {
    const { posts, isRefreshing } = this.state;

    return (
      <Container isRefreshing={isRefreshing}>
        {isRefreshing ? <Loader height="50px" /> : null}
        <InfiniteScroll
          dataLength={posts.length}
          next={this.getPosts}
          hasMore
          loader={<Loader />}
          endMessage={(
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
        )}
          refreshFunction={this.refresh}
          pullDownToRefresh
          pullDownToRefreshContent={null}
          pullDownToRefreshThreshold="50"
          releaseToRefreshContent={null}
        >
          {posts.map(k => (
            <PostCard key={k.id} />
          ))}
        </InfiniteScroll>
      </Container>
    );
  }
}

export default withMainLayout(Feed);
