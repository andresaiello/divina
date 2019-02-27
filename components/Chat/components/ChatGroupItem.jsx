import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import propTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

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
        right: 0;
        top: 0;
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
    const { onChatClick, item } = this.props;
    return (
      <StyledChatGroupItem onClick={() => onChatClick(item._id)}>
        <Avatar alt={item.author.username} src={item.author.profilePic} className="avatar" />
        <div className="content">
          <div className="caption">{item.caption}</div>
          <div className="author">{item.author.username}</div>
          <Divider />
        </div>
        <div className="updatedAt">
          {item.updatedAt}
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
