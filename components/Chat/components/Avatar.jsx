import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import propTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { unstable_Box as Box } from '@material-ui/core/Box';

const StyledAvatar = styled(Avatar)`
    
  && {
    width: 36px;
    height: 36px;
    z-index: 1;
    margin: 0 19px 0 19px;
    border: ${props => (props.className.split(' ').includes('border') ? '1px solid rgb(255, 0, 173)' : '0px solid rgb(255, 0, 173)')};
  }
`;

export default function (props) {
  const { border } = props;
  const { username, profilePic } = props.user;
  return (
    <StyledAvatar alt={username} src={profilePic} className={classNames('avatar', border ? 'border' : null)} />

  );
}
