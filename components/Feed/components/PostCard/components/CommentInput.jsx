import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {
  Avatar, TextField, Grid, Button,
} from '@material-ui/core';

const Container = styled(Grid)`
  justify-content: space-around;
`;

function CommentInput () {
  return (
    <Container container spacing={8} alignItems="flex-end">
      <Grid item>
        <Avatar alt="avatar" src="/static/girl.jpeg" />
      </Grid>
      <Grid item>
        <TextField label="Añade un comentario" />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Publicar
        </Button>
      </Grid>
    </Container>
  );
}

CommentInput.propTypes = {
};

export default CommentInput;
