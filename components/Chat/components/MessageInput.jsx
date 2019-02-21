import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {
  TextField, Grid, Button,
} from '@material-ui/core';

const Container = styled(Grid)`
  justify-content: space-around;
  background: white;
  height: 70px;
  padding-bottom: 10px;

  .input {
    margin-bottom: 5px;
  }
`;

function MessageInput ({
  currentMsg, editMsg, sendMsg, ...rest
}) {
  return (
    <Container container spacing={8} alignItems="flex-end" {...rest}>
      <Grid item>
        <TextField
          className="input"
          onChange={editMsg}
          value={currentMsg}
          label="Enviar mensaje"
          onKeyUp={e => (e.keyCode === 13 ? sendMsg(currentMsg) : null)}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => sendMsg(currentMsg)}
        >
          Enviar
        </Button>
      </Grid>
    </Container>
  );
}

MessageInput.propTypes = {
  currentMsg: propTypes.string.isRequired,
  editMsg: propTypes.func.isRequired,
  sendMsg: propTypes.func.isRequired,
};

export default MessageInput;
