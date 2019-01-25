import React, { Fragment } from 'react';

import withMainLayout from '~/HOCs/withMainLayout';

import { PostCard } from './PostCard';

function Feed () {
  return (
    <Fragment>
      <PostCard />
      <PostCard />
      <PostCard />
    </Fragment>
  );
}

export default withMainLayout(Feed);
