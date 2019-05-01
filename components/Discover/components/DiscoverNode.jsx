import React from 'react';
import propTypes from 'prop-types';

import { Link } from '~/server/routes';
import { Image } from '~/components/shared';

export default function DiscoverNode({ post }) {
  return (
    <Link route="pictureDetails" params={{ username: post.author.username, postId: post._id }}>
      <Image className="img" src={post.picUrl} alt="Post" />
    </Link>
  );
}

DiscoverNode.propTypes = {
  post: propTypes.shape({}).isRequired,
};
