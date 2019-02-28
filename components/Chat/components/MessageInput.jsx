import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {
  TextField, Grid, Button,
} from '@material-ui/core';
import Send from '@material-ui/icons/Send';

const Container = styled.div`
  justify-content: space-around;
  background: white;
  height: 45px;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;

  .input {
    margin-bottom: 5px;
    height: 40px;
    flex-grow: 1;
    margin-left: 15px;
    border: 0;
    outline: none;
  }

  svg{
    margin: 0 5px 0 5px;
    place-self: center; 
  }

`;

function MessageInput ({
  currentMsg, editMsg, sendMsg, ...rest
}) {
  return (
    <Container {...rest}>
      <input
        className="input"
        type="text"
        onChange={editMsg}
        value={currentMsg}
        placeholder="Enviar mensaje"
        onKeyUp={e => (e.keyCode === 13 ? sendMsg(currentMsg) : null)}
      />
      <Send
        className="send"
        onClick={() => sendMsg(currentMsg)}
      />
    </Container>
  );
}

MessageInput.propTypes = {
  currentMsg: propTypes.string.isRequired,
  editMsg: propTypes.func.isRequired,
  sendMsg: propTypes.func.isRequired,
};

export default MessageInput;
