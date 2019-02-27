import React from 'react';
import styled from 'styled-components';
import ChatList from './ChatList';
import Chat from './Chat';
import withMainLayout from '~/HOCs/withMainLayout';

const StyledChatView = styled.div`

`;

const ChatView = class extends React.Component {
  state = {
    chatGroupId: null,
  }

  onChatClick = (chatGroupId) => {
    this.setState({ chatGroupId });
  }

  render () {
    const { chatGroupId } = this.state;
    return (
      (chatGroupId) ? <Chat chatGroupId={chatGroupId} /> : <ChatList onChatClick={this.onChatClick} />
    );
  }
};

export default withMainLayout(ChatView);
