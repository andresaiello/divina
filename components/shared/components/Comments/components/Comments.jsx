import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { Mutation, Query } from 'react-apollo';

import SecContext from '~/context/secContext';
import { Loader } from '~/components/shared/';
import { COMMENT_POST, GET_POST_COMMENTS } from '~/lib/queries';

import CommentsList from './CommentsList';
import CommentInput from './CommentInput';

export default class extends Component {
  static contextType = SecContext;

  static propTypes = {
    postId: propTypes.string.isRequired,
  };

  state = {
    currentComment: '',
  }

  editComment = (e) => {
    const { value } = e.target;

    this.setState({ currentComment: value });
  }

  sendComment = send => async (value) => {
    const { postId } = this.props;
    const { user } = this.context;

    await send({ variables: { postId, author: user._id, comment: value } });

    this.setState({ currentComment: '' });
  }

  render () {
    const { postId } = this.props;
    const { currentComment } = this.state;
    const { user } = this.context;

    return (
      <Fragment>
        <Query
          query={GET_POST_COMMENTS}
          variables={{ postId }}
        >
          {({ data: { comments }, error, loading }) => (error
            ? <div>Error obteniendo comentarios</div> // @todo: better error
            : loading
              ? <Loader />
              : comments && comments.nodes.length
                ? <CommentsList comments={comments} />
                : <div>Todavía no hay comentarios!</div> // @todo: add screen for empty comments
          )}
        </Query>
        {user && user._id
          ? (
            <Mutation
              mutation={COMMENT_POST}
              update={(cache, { data }) => {
                const prevQuery = cache.readQuery({ query: GET_POST_COMMENTS, variables: { postId } });

                const newNodes = [...prevQuery.comments.nodes, data.commentPost];

                cache.writeQuery({
                  query: GET_POST_COMMENTS,
                  variables: { postId },
                  data: { ...prevQuery, comments: { ...prevQuery.comments, nodes: newNodes } },
                });
              }}
            >
              {(send, { data, loading, error }) => (
                <CommentInput
                  className="123"
                  editComment={this.editComment}
                  currentComment={currentComment}
                  sendComment={this.sendComment(send)}
                  userAvatar={user.profilePic}
                />
              )}
            </Mutation>
          )
          : null
        }
      </Fragment>
    );
  }
}
