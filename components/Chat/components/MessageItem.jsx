import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import timeAgo from '~/lib/timeAgo';
import format from 'date-fns/format';
import SecContext from '~/context/secContext';

const StyledMessageItem = styled.li`
  && {
    width: 100%;
    position: relative;
    padding-top: 8px;
    padding-bottom: 8px;
    list-style: none;
    opacity: 0.9;

    .author {
      background: #fff;
      padding: 0 0 0 35px;
      border-top-left-radius: 7.5px;
      border-top-right-radius: 7.5px;
    }

    .content {
      flex-grow: 1;
      height: 100%;
      margin: 0 27px 13px 27px;
      background-color: #dcf8c6;
      border-radius: 7.5px;
      opacity: 0.8;
    }

    .createdAt {
      position: absolute;
      right: 35px;
      bottom: 23px;
      color: rgb(74, 74, 74);
      font-size: 12px;
    }

    .avatar {
      width: 30px;
      height: 30px;
      top: 0;
      left: 7px;
      margin: 0;
      position: absolute;
      z-index: 1;
    }

    .self {
      text-align: right;

      .avatar {
        right: 7px;
        left: initial;
      }

      .author {
        padding: 0 35px 0 0;
      }
      .content {
        background-color: rgb(248, 231, 28);
      }
      .createdAt {
        right: initial;
        left: 35px;
      }
    }
  }
`;

const MessageItem = class extends React.PureComponent {
  static contextType = SecContext;

  render() {
    const { user } = this.context;

    const {
      message: {
        createdAt,
        content,
        author,
        author: { username },
      },
    } = this.props;
    const created = format(new Date(parseInt(createdAt, 10)), 'HH:mm');

    return (
      <StyledMessageItem>
        <div className={username === user.username ? 'self' : 'friend'}>
          <Avatar user={author} />
          <div className="content">
            <div className="author">{username}</div>
            <div className="content">{content}</div>
            <div className="createdAt">{created}</div>
          </div>
        </div>
      </StyledMessageItem>
    );
  }
};

export default MessageItem;
