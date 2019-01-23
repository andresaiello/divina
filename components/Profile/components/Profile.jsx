import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

import withMainLayout from '~/HOCs/withMainLayout';
import { Image } from '~/components/shared';

const StyledProfile = styled.article`
  .avatar {
    height: 70px;
    width: 70px;
  }
`;

const ProfileInfo = styled.div`

`;

const PhotoGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 32% 32% 32%;
  grid-row-gap: 5px;
  justify-content: space-between;
`;

function Profile () {
  return (
    <StyledProfile>
      <ProfileInfo>
        <Avatar className="avatar" src="/static/girl.jpeg" alt="Foto de perfil" />
      </ProfileInfo>
      <PhotoGrid>
        <Image
          height="80px"
          src="/static/girl.jpeg"
          alt="Foto de perfil"
        />
        <Image
          height="80px"
          src="/static/girl.jpeg"
          alt="Foto de perfil"
        />
        <Image
          height="80px"
          src="/static/girl.jpeg"
          alt="Foto de perfil"
        />
        <Image
          height="80px"
          src="/static/girl.jpeg"
          alt="Foto de perfil"
        />
        <Image
          height="80px"
          src="/static/girl.jpeg"
          alt="Foto de perfil"
        />
        <Image
          height="80px"
          src="/static/girl.jpeg"
          alt="Foto de perfil"
        />
      </PhotoGrid>
    </StyledProfile>
  );
}

export default withMainLayout(Profile);
