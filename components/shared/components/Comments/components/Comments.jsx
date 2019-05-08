import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { Mutation, Query } from 'react-apollo';

import SecContext from '~/context/secContext';
import { Loader } from '~/components/shared/';
import { Post } from '~/lib/graphql';

import CommentsList from './CommentsList';
import CommentInput from './CommentInput';

export default class extends Component {
  static contextType = SecContext;

  static propTypes = {
    postId: propTypes.string.isRequired,
  };

  state = {
    currentComment: '',
  };

  editComment = e => {
    const { value } = e.target;

    this.setState({ currentComment: value });
  };

  sendComment = send => async value => {
    const { postId } = this.props;
    const { user } = this.context;

    await send({ variables: { postId, author: user._id, comment: value } });

    this.setState({ currentComment: '' });
  };

  render() {
    const { postId } = this.props;
    const { currentComment } = this.state;
    const { user } = this.context;

    // @todo: set an animation + go down with the overflow on add comment
    return (
      <Fragment>
        <Query query={Post.Queries.GET_COMMENTS} variables={{ postId }} fetchPolicy="network-only">
          {({ data, error, loading }) =>
            error ? (
              <div>Error obteniendo comentarios</div> // @todo: better error
            ) : loading ? (
              <Loader height="50px" />
            ) : data && data.comments && data.comments.nodes.length ? (
              <CommentsList comments={data.comments} />
            ) : (
              <div>Todavía no hay comentarios!</div>
            ) // @todo: add screen for empty comments
          }
        </Query>
        {user && user._id ? (
          <Mutation mutation={Post.Mutations.COMMENT}>
            {(send, { loading }) => (
              <CommentInput
                savingComment={loading}
                editComment={this.editComment}
                currentComment={currentComment}
                sendComment={this.sendComment(send)}
                userAvatar={user.profilePic}
              />
            )}
          </Mutation>
        ) : null}
      </Fragment>
    );
  }
}
