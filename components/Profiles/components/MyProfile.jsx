import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import withMainLayout from '~/HOCs/withMainLayout';
import loginRequired from '~/HOCs/loginRequired';
import SecContext from '~/context/secContext';
import { Link } from '~/server/routes';

import ProfileInfo from './ProfileInfo';
import PhotoGrid from './PhotoGrid';

const StyledProfile = styled.article`

`;

class MyProfile extends Component {
  static contextType = SecContext;

  render () {
    const { user: { username, profilePic } } = this.context;

    const editProfile = (
      <Link route="editProfile" prefetch>
        <Button>Editar</Button>
      </Link>
    );

    return (
      <StyledProfile>
        <ProfileInfo
          action={editProfile}
          {...{ username, profilePic }}
          followers={1}
          following={1}
        />
        <PhotoGrid />
      </StyledProfile>
    );
  }
}

export default loginRequired(withMainLayout(MyProfile));
