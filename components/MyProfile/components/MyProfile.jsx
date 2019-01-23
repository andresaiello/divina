import React from 'react';
import styled from 'styled-components';

import withMainLayout from '~/HOCs/withMainLayout';
import { Image } from '~/components/shared';

const StyledProfile = styled.article`
  height: 100vh;

  .image {
    height: 55vh;
  }
`;

const ProfileActions = styled.aside`

`;

function MyProfile () {
  return (
    <StyledProfile>
      <Image
        className="image"
        withLoader
        src="/static/girl.jpeg"
        height="55vh"
        alt="Foto de perfil"
      />
      <ProfileActions>
        <div>Hola</div>
      </ProfileActions>
    </StyledProfile>
  );
}

export default withMainLayout(MyProfile);
