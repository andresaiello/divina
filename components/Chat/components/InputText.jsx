import React from 'react';
import styled from 'styled-components';
import { Mutation, Query } from 'react-apollo';
import { CHAT_NEW_MSG } from '~/lib/graphql/Chat';
import MessageInput from './MessageInput';
import SecContext from '~/context/secContext';

const StyledInputText = styled.div`
  && {
    width: 100%;
    /* bottom: 0;  */
    bottom: 0px;
    height: 45px;
    padding-bottom: 10px;
    position: fixed;
    z-index: 20;
  }
`;

const InputText = class extends React.Component {
  static contextType = SecContext;

  state = {
    currentMsg: '',
  }

  editMsg = (event) => {
    this.setState({ currentMsg: event.target.value });
  };

  sendMsg = send => async (value) => {
    const { chatGroupId } = this.props;

    await send({ variables: { chatGroupId, content: value } });
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
