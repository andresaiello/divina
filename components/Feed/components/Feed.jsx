import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';
import { ArrowDropDown } from '@material-ui/icons';

import { GET_POSTS } from '~/lib/queries';
import withMainLayout from '~/HOCs/withMainLayout';

import { PostCard } from './PostCard';
import Loader from '../../shared/components/Loader';

const StyledFeed = styled.div`

`;

class Feed extends Component {
  state = {
    shouldFetchMore: false,
  }

  render () {
    return (
      <Query query={GET_POSTS}>
        {({ data, error, loading }) => {
          let loader = null;
          let errorMessage = null;
          if (loading) loader = <Loader />;
          if (error) errorMessage = <div>Error!</div>;

          const { posts } = data || { posts: [] };

          return (
            <StyledFeed>
              <InfiniteScroll
                pageStart={0}
                loadMore={() => console.log('load more!')}
                hasMore
                useWindow={false}
                {...{ loader }}
              >
                {posts.map(({ id, picUrl }) => <PostCard key={id} {...{ picUrl }} />)}
              </InfiniteScroll>
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
