import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Query } from 'react-apollo';

import { EditPost } from '~/components/EditPost';
import { Loader } from '~/components/shared';
import { EditPost as EditPostGQL } from '~/lib/graphql';

export default class extends Component {
  static propTypes = {
    postId: propTypes.string.isRequired,
  };

  static async getInitialProps({ query }) {
    return { ...query };
  }

  render() {
    const { postId } = this.props;

    return (
      <Query query={EditPostGQL.Queries.GET_POST} variables={{ _id: postId }}>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <div>Error!</div>; // @todo: better error message
          if (!data.post || !data.post.picUrl) return <div>No existe!</div>; // @todo: better error message

          return <EditPost hideFooter postId={postId} post={data.post} />;
        }}
      </Query>
    );
  }
}
