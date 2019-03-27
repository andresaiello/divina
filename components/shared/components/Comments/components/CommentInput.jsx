import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {
  Avatar, TextField, Grid, Button, InputAdornment, Typography,
} from '@material-ui/core';

const Container = styled(Grid)`
  justify-content: space-around;
  background: white;
  bottom: 0px;
  height: 70px;
  padding-bottom: 10px;
  position: fixed;

  .inputContainer {
    display: flex;
    align-items: center;

    .avatar {
      margin-right: 7.5px;
    }
  }
`;

const CommentTextField = styled(TextField)`
  && {
    width: 96%;

    fieldset {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }

    input {
      padding: 7.5px 12px 8.5px;
    }
  }
`;

const StyledAdornment = styled(InputAdornment)`
  p {
    cursor: pointer;
    font-weight: bold;
    user-select: none;
    color: #ABDBFF;
  }

  &.isEnabled {
    p {
      color: rgb(1,145,255);
    }
  }
`;

function CommentInput ({
  currentComment, editComment, sendComment, userAvatar, ...rest
}) {
  const isEnabled = currentComment.length > 0;

  return (
    <Container container spacing={8} alignItems="flex-end" {...rest}>
      <Grid item xs={11}>
        <div className="inputContainer">
          <Avatar className="avatar" alt="avatar" src={userAvatar} />
          <CommentTextField
            className="input"
            onChange={editComment}
            value={currentComment}
            variant="outlined"
            placeholder="Añade un comentario"
            onKeyUp={e => (e.keyCode === 13 ? sendComment(currentComment) : null)}
            InputProps={{
              endAdornment: (
                <StyledAdornment
                  className={`${isEnabled ? 'isEnabled' : ''}`}
                  position="end"
                  onClick={() => (isEnabled ? sendComment(currentComment) : null)}
                >
                  Publicar
                </StyledAdornment>
              ),
            }}
          />
        </div>
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
