import React from 'react';
import styled from 'styled-components';
import MessageItem from './MessageItem';

const MessageList = class extends React.Component {
  componentDidMount () {
    this.props.subscribeToMore();
  }

  render () {
    const { messages } = this.props;
    return (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {messages.map(message => <MessageItem key={message._id} message={message} />)}
      </ul>
    );
  }
};

export default MessageList;
