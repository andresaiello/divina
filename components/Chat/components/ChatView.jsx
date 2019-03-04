import React from 'react';
import styled from 'styled-components';
import ChatList from './ChatList';
import Chat from './Chat';
import withMainLayout from '~/HOCs/withMainLayout';

const StyledChatView = styled.div`

`;

const ChatView = class extends React.Component {
  state = {
    chatGroupId: '5c7686f3da5df77a333fbcf9',
    // chatGroupId: null,
  }

  onChatClick = (chatGroupId) => {
    this.setState({ chatGroupId });
  }

  render () {
    const { chatGroupId } = this.state;

    return (chatGroupId
      ? <Chat {...this.props} chatGroupId={chatGroupId} />
      : <ChatList {...this.props} onChatClick={this.onChatClick} />
    );
  }
};

export default withMainLayout(ChatView);
