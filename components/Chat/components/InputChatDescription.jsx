import React from 'react';
import styled from 'styled-components';
import { Mutation, Query } from 'react-apollo';
import { CHAT_NEW_CHAT } from '~/lib/graphql/Chat';
import MessageInput from './MessageInput';
import SecContext from '~/context/secContext';
import { Router } from '~/server/routes';

const StyledInputText = styled.div`
  && {
    width: 100%;
    /* bottom: 0;  */
    z-index: 2;
  }
`;

const InputChatDescription = class extends React.Component {
  static contextType = SecContext;

  state = {
    currentMsg: '',
  };

  editMsg = event => {
    this.setState({ currentMsg: event.target.value });
  };

  sendMsg = send => async value => {
    const { selectedMembers } = this.props;
    const { user } = this.context;
    const variables = {
      author: user._id,
      caption: value,
      picUrl: [],
      members: [user._id, ...selectedMembers],
    };

    await send({
      variables,
    });
    this.setState({ currentMsg: '' });
  };

  render() {
    const { currentMsg } = this.state;

    return (
      <StyledInputText>
        <Mutation mutation={CHAT_NEW_CHAT}>
          {(send, { data, loading, error }) => {
            if (loading) return <p>Creando chat...</p>;
            if (data) {
              Router.pushRoute(`/chat/${data.createChatGroup._id}`);
              return <p>Redirigiendo...</p>;
            }

            return (
              <div>
                <MessageInput
                  editMsg={this.editMsg}
                  currentMsg={currentMsg}
                  sendMsg={this.sendMsg(send)}
                />
              </div>
            );
          }}
        </Mutation>
      </StyledInputText>
    );
  }
};

export default InputChatDescription;
