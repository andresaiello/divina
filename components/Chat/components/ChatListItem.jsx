import React from 'react';
import styled from 'styled-components';
import { Link } from '~/server/routes';
import Avatar from './Avatar';
import propTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import timeAgo from '~/lib/timeAgo';

const StyledChatListItem = styled.div`
  && {

    
    width: 100%;
    height: 72px;
    min-height: 72px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    color: rgb(74, 74, 74);

    .avatar{
        width: 55px;
        height: 55px;
    }

    .content{
      flex-grow: 1;
      height: 100%;
      margin: 0 25px 0 0;
    }

    .caption{
      color: rgb(1, 145, 255);
      font-size: 16px;
      font-weight: 600;
      margin-top: 15px;
    }

    .author {
      font-size: 14px;
      font-weight: 400;
    }

    .updatedAt {
      position: absolute;
      right: 40px;
      top: 10px;
      font-size: 14px;
    }

    hr {
      margin-top: 15px;
    }

    svg {
      color: rgb(155, 155, 155);
      position: absolute;
      right: 20px;
    }

  }

`;

const ChatListItem = class extends React.PureComponent {
  render () {
    const {
      item: {
        _id, caption, updatedAt, author, author: { username, profilePic },
      },
    } = this.props;

    return (
      <Link route="chat" params={{ chatGroupId: _id }}>
        <StyledChatListItem>
          <Avatar user={author} />
          <div className="content">
            <div className="caption">{caption}</div>
            <div className="author">{username}</div>
            <Divider />
          </div>
          <div className="updatedAt">
            {timeAgo.format(parseInt(updatedAt, 10))}
          </div>
          <KeyboardArrowRight />
        </StyledChatListItem>
      </Link>


    );
  }
};

ChatListItem.propTypes = {
};

export default ChatListItem;
