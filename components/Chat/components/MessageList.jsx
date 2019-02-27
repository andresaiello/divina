import React from 'react';
import styled from 'styled-components';
import MessageItem from './MessageItem';

const StyledMessageList = styled.div`
  && {
    height: calc(100vh - 156px);
  }

`;

const MessageList = class extends React.Component {
  componentDidMount () {
    this.props.subscribeToMore();
  }

  render () {
    const { messages } = this.props;
    return (
      <StyledMessageList>
        {messages.map(message => <MessageItem key={message._id} message={message} />)}
      </StyledMessageList>
    );
  }
};

export default MessageList;
