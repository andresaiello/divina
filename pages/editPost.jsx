import React, { Component } from 'react';
import propTypes from 'prop-types';
import { EditPost } from '~/components/EditPost';
import { Query } from 'react-apollo';
import { LoadingScreen } from '~/components/shared';
import { PictureDetails } from '~/lib/graphql';

export default class extends Component {
  static propTypes = {
    postId: propTypes.string.isRequired,
  }

  static async getInitialProps ({ query }) {
    return { ...query };
  }

  render () {
    const { postId } = this.props;

    return (
      <Query
        query={PictureDetails.Queries.GET_DETAILS}
        variables={{ _id: postId }}
      >
        {({ data: postData, loading, error }) => (loading
          ? <LoadingScreen withLayout />
          : error
            ? <div>Error!</div> // @todo: better error message
            : !postData.post || !postData.post.author
              ? <div>No existe!</div> // @todo: better error message
              : <EditPost {...{ ...postData.post, postId }} />
        )}
      </Query>
    );
  }
}
