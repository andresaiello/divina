import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Avatar from './Avatar';
import { Link } from '~/server/routes';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: white;
    color: black;
    border-bottom: 1px solid rgb(216, 216, 216);
    box-shadow: none;
    padding: 0;

    .toolbar {
      min-height: 40px;
      justify-content: left;
    }

    .avatar {
      margin: 0 5px 0 5px;
    }

    h6 {
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-size: 16px;
      color: rgb(74, 74, 74);
    }

    a {
      color: black;
      text-decoration: none;
    }
  }
`;

function ChatHeadAppBar(props) {
  const { chatGroup } = props;
  const defaultUser = { username: '', profilePic: '' };
  const user = chatGroup && chatGroup.members.length > 1 ? chatGroup.members[1] : defaultUser;
  return (
    <StyledAppBar position="static" {...props}>
      <Toolbar className="toolbar">
        <Link route="/chat" prefetch>
          <KeyboardArrowLeft />
        </Link>
        <Avatar user={user} border />

        <Typography variant="h6" color="inherit" className="disable-select">
          {chatGroup && chatGroup.members.map(member => member.username).join(', ')}
        </Typography>
        {/* <Link route="/feed" prefetch><Add /></Link> */}
      </Toolbar>
    </StyledAppBar>
  );
}

export default ChatHeadAppBar;
