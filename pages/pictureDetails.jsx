import React from 'react';
import { Query } from 'react-apollo';

import { PictureDetails as PictureDetailsGQL } from '~/lib/graphql';
import { PictureDetails } from '~/components/PictureDetails';
import { LoadingScreen } from '~/components/shared';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    return { ...query };
  }

  render() {
    const { postId } = this.props;

    return (
      <Query query={PictureDetailsGQL.Queries.GET_DETAILS} variables={{ _id: postId }}>
        {({ data: postData, loading, error }) =>
          loading ? (
            <LoadingScreen withLayout />
          ) : error ? (
            <div>Error!</div> // @todo: better error message
          ) : !postData.post || !postData.post.author ? (
            <div>El perfil no existe!</div> // @todo: better error message
          ) : (
            <PictureDetails {...{ ...postData.post, postId }} />
          )
        }
      </Query>
    );
  }
}
