import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import timeAgo from '~/lib/timeAgo';
import SecContext from '~/context/secContext';

const StyledMessageItem = styled.div`
  && {
    width: 100%;
    position: relative;

    .author {
      background: #fff;
      padding: 0 0 0 35px;
      border-top-left-radius: 7.5px;
      border-top-right-radius: 7.5px;
    }

    .content{
      flex-grow: 1;
      height: 100%;
      margin: 0 27px 27px 27px;
      background-color: #dcf8c6;
      border-radius: 7.5px;
      opacity: 0.8;
    }
    
    .createdAt {
      position: absolute;
      right: 30px;
      top: 0;
    }

    .avatar{
      width: 30px;
      height: 30px;
      top: -10px;
      position: absolute;
      z-index: 1;
    }

    .self{
      text-align: right;

      .avatar{
        right: 0;
        left: initial;
      }

      .author {
        padding: 0 35px 0 0;
      }
      .content{
        background-color: #fff;
      }
      .createdAt {
        right: initial;
        left: 30px;
      }
    }

  }

`;


const MessageItem = class extends React.PureComponent {
  static contextType = SecContext;

  render () {
    const { user } = this.context;

    const {
      message: {
        createdAt, content, author, author: { username },
      },
    } = this.props;

    return (
      <StyledMessageItem>
        <div className={(username === user.username) ? 'self' : null}>
          <Avatar user={author} />
          <div className="content">
            <div className="author">{username}</div>
            <div className="content">{content}</div>
            <div className="createdAt">{timeAgo.format(parseInt(createdAt, 10))}</div>
          </div>
        </div>
      </StyledMessageItem>
    );
  }
};


export default MessageItem;
