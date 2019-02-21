import React from 'react';
import styled from 'styled-components';

const MessageItem = class extends React.PureComponent {
  render () {
    const { message } = this.props;
    return (
      <li style={{ borderTop: '1px solid lightgray' }}>
        <p>
          {message.text}
        </p>
      </li>
    );
  }
};


export default MessageItem;
