import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import timeAgo from '~/lib/timeAgo';

const StyledMessageItem = styled.div`
  && {
    width: 100%;
    position: relative;

    .avatar{
      width: 30px;
      height: 30px;
      margin: 0 19px 0 19px;
      top: -10px;
      position: absolute;
      z-index: 1;
    }
    
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

  }

`;


const MessageItem = class extends React.PureComponent {
  render () {
    const { message: { createdAt, content, author: { username, profilePic } } } = this.props;

    return (
      <StyledMessageItem>
        <Avatar alt={username} src={profilePic} className="avatar" />
        <div className="content">
          <div className="author">{username}</div>
          <div className="content">{content}</div>
          <div className="createdAt">{timeAgo.format(parseInt(createdAt, 10))}</div>
        </div>

      </StyledMessageItem>
    );
  }
};


export default MessageItem;
