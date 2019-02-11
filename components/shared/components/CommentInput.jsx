import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {
  Avatar, TextField, Grid, Button,
} from '@material-ui/core';

const Container = styled(Grid)`
  justify-content: space-around;
  background: white;
  bottom: 0px;
  height: 50px;
  padding-bottom: 10px;
  position: fixed;

  .input {
    margin-bottom: 5px;
  }
`;

function CommentInput ({
  currentComment, editComment, sendComment, userAvatar, ...rest
}) {
  return (
    <Container container spacing={8} alignItems="flex-end" {...rest}>
      <Grid item>
        <Avatar alt="avatar" src={userAvatar} />
      </Grid>
      <Grid item>
        <TextField
          className="input"
          onChange={editComment}
          value={currentComment}
          label="Añade un comentario"
          onKeyUp={e => (e.keyCode === 13 ? sendComment(currentComment) : null)}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => sendComment(currentComment)}
        >
          Publicar
        </Button>
      </Grid>
    </Container>
  );
}

CommentInput.propTypes = {
  currentComment: propTypes.string.isRequired,
  editComment: propTypes.func.isRequired,
  sendComment: propTypes.func.isRequired,
  userAvatar: propTypes.string.isRequired,
};

export default CommentInput;
