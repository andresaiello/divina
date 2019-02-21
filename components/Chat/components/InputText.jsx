import React from 'react';
import styled from 'styled-components';
import { Mutation, Query } from 'react-apollo';
import { CHAT_NEW_MSG } from '~/lib/queries';
import MessageInput from './MessageInput';

const StyledInputText = styled.div`

`;

const InputText = class extends React.Component {
    state = {
      currentMsg: '',
    }

    editMsg = (event) => {
      this.setState({ currentMsg: event.target.value });
    };

    sendMsg = send => async (value) => {
      console.log(value);
      await send({ variables: { message: value } });
      this.setState({ currentMsg: '' });
    }

    render () {
      const { currentMsg } = this.state;
      return (
        <StyledInputText>
          <Mutation
            mutation={CHAT_NEW_MSG}
          >
            {(send, { data, loading, error }) => (

              <MessageInput
                editMsg={this.editMsg}
                currentMsg={currentMsg}
                sendMsg={this.sendMsg(send)}
              />
            )}
          </Mutation>


        </StyledInputText>
      );
    }
};

export default InputText;
