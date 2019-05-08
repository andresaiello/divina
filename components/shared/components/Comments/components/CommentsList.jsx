import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  ListItemAvatar,
  Avatar,
  List,
  Typography,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const StyledList = styled(List)`
  && {
    overflow-y: scroll;
    margin-bottom: 60px;

    .userName {
      word-wrap: break-word;
      font-size: 16px;
      font-weight: 600;
    }

    .commentText {
      word-wrap: break-word;
    }
  }
`;

export default function CommentsList({ comments }) {
  const newList = comments.nodes.reduce((acum, value) => {
    const lastAuthor = acum.slice(-1)[0] ? acum.slice(-1)[0].author.username : null;

    if (acum.slice(-1)[0] && lastAuthor === value.author.username) {
      const lastItem = acum.slice(-1)[0];

      return [...acum.slice(0, -1), { ...lastItem, content: [...lastItem.content, value.content] }];
    }
    return [...acum, { ...value, content: [value.content] }];
  }, []);
  return (
    <StyledList>
      {newList.map(({ _id, content, author: { username, profilePic } }) => (
        <ListItem key={_id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="avatar" src={profilePic} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Fragment>
                <Typography className="userName" component="p" color="textPrimary">
                  {`${username}`}
                </Typography>
                {content.map((commentText, i) => (
                  <Typography key={i} className="commentText" component="p" color="textPrimary">
                    {commentText}
                  </Typography>
                ))}
                <Divider />
              </Fragment>
            }
          />
        </ListItem>
      ))}
    </StyledList>
  );
}

CommentsList.propTypes = {
  comments: propTypes.shape({
    nodes: propTypes.arrayOf(
      propTypes.shape({
        _id: propTypes.string.isRequired,
        content: propTypes.string.isRequired,
        author: propTypes.shape({
          username: propTypes.string.isRequired,
          profilePic: propTypes.string.isRequired,
        }).isRequired,
      }),
    ),
  }).isRequired,
};
