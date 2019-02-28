import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import propTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import timeAgo from '~/lib/timeAgo';

const StyledChatGroupItem = styled.div`
  && {
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    color: rgb(74, 74, 74);

    .avatar{
        width: 55px;
        height: 55px;
        margin: 0 19px 0 19px;
    }

    .content{
        flex-grow: 1;
        height: 100%;
    }

    .caption{
        color: rgb(1, 145, 255);
        font-size: 16px;
        font-weight: 600;
        margin-top: 15px;
    }

    .author{
        font-size: 14px;
        font-weight: 400;
    }

    .updatedAt {
        position: absolute;
        right: 25px;
        top: 10px;
    }

    hr{
        margin-top: 15px;
    }

    svg {
        color: rgb(155, 155, 155);
    }

  }

`;

const ChatGroupItem = class extends React.PureComponent {
  render () {
    const {
      onChatClick, item: {
        _id, caption, updatedAt, author: { username, profilePic },
      },
    } = this.props;
    return (
      <StyledChatGroupItem onClick={() => onChatClick(_id)}>
        <Avatar alt={username} src={profilePic} className="avatar" />
        <div className="content">
          <div className="caption">{caption}</div>
          <div className="author">{username}</div>
          <Divider />
        </div>
        <div className="updatedAt">
          {timeAgo.format(parseInt(updatedAt, 10))}
        </div>
        <KeyboardArrowRight />
      </StyledChatGroupItem>

    );
  }
};

ChatGroupItem.propTypes = {
  onChatClick: propTypes.func.isRequired,
};

export default ChatGroupItem;
