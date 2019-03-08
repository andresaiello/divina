import React from 'react';
import styled from 'styled-components';
import MessageItem from './MessageItem';

const StyledMessageList = styled.div`
  && {
    padding-top: 20px;
    flex: 1;
    overflow-y: scroll;
  }

`;

const MessageList = class extends React.Component {
  componentDidMount () {
    this.scrollToBottom();
    this.props.subscribeToMore();
  }

  componentDidUpdate () {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }

  render () {
    const { messages } = this.props;
    return (
      <StyledMessageList>
        {messages.map(message => <MessageItem key={message._id} message={message} />)}
        <div
          style={{ float: 'left', clear: 'both' }}
          ref={(el) => { this.messagesEnd = el; }}
        />
      </StyledMessageList>
    );
  }
};

export default MessageList;
