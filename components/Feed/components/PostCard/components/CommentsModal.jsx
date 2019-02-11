import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { ListItemAvatar, Avatar } from '@material-ui/core';

import SecContext from '~/context/secContext';
import { FullscreenModal, CommentInput } from '~/components/shared/';
import { Mutation, Query } from 'react-apollo';
import { COMMENT_POST, GET_POST_COMMENTS } from '~/lib/queries';
import Loader from '~/components/shared/components/Loader';

const StyledList = styled(List)`
  && {
    overflow-y: scroll;
    margin-bottom: 55px;

    .commentText {
      word-wrap: break-word;
    }
  }
`;

class CommentsModal extends Component {
  static contextType = SecContext;

  static propTypes = {
    postId: propTypes.string.isRequired,
    isOpen: propTypes.bool.isRequired,
    close: propTypes.func.isRequired,
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
    const { isOpen, postId, close } = this.props;
    const { currentComment } = this.state;
    const { user } = this.context;

    return (
      <FullscreenModal
        title="Comentarios"
        {...{ isOpen, close }}
      >
        <Query
          query={GET_POST_COMMENTS}
          variables={{ postId }}
        >
          {({ data: { comments }, error, loading }) => (error
            ? <div>Error obteniendo comentarios</div> // @todo: better error
            : loading
              ? <Loader />
              : comments && comments.nodes.length
                ? (
                  <StyledList>
                    {comments.nodes.map(({ _id, content, author: { username, profilePic } }) => (
                      <ListItem key={_id} alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt="avatar" src={profilePic} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={(
                            <Fragment>
                              <Typography className="commentText" component="p" color="textPrimary">
                                {content}
                              </Typography>
                              {`- ${username}`}
                            </Fragment>
                            )}
                        />
                      </ListItem>
                    ))}
                  </StyledList>
                )
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
      </FullscreenModal>
    );
  }
}

export default CommentsModal;
