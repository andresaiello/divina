import React from 'react';
import styled from 'styled-components';
import MessageItem from './MessageItem';

const MessageList = class extends React.PureComponent {
  componentDidMount () {
    this.props.subscribeToMore();
  }

  render () {
    const { allMessages } = this.props;
    return (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {allMessages.map(message => <MessageItem key={message.id} message={message} />)}
      </ul>
    );
  }
};

export default MessageList;
