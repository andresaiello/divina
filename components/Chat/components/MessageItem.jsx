import React from 'react';
import styled from 'styled-components';

const MessageItem = class extends React.PureComponent {
  render () {
    const { message } = this.props;
    return (
      <div style={{ borderTop: '1px solid lightgray' }}>
        {message.content}
      </div>
    );
  }
};


export default MessageItem;
