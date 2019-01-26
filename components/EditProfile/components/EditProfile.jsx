import React from 'react';
import styled from 'styled-components';
import { Avatar, TextField } from '@material-ui/core';

import withMainLayout from '~/HOCs/withMainLayout';

const Container = styled.div`
  .avatarContainer {
    text-align: center;

    .avatar {
      width: 80px;
      height: 80px;
      margin: 10px auto;
    }
  }

  .dataContainer {
    .field {
      display: flex;
      align-items: flex-end;

      p {
        margin: 0px 10px 5px 0px;
      }
    }
  }

  .actionsContainer {
    a {
      display: block;
      color: #007ec1;
      margin: 10px 0px;
    }
  }
`;

function EditProfile () {
  return (
    <Container>
      <div className="avatarContainer">
        <Avatar className="avatar" src="/static/girl.jpeg" alt="Foto de perfil" />
        <a>Cambiar foto de perfil</a>
      </div>
      <div className="dataContainer">
        <div className="field">
          <p>Nombre</p>
          <TextField />
        </div>
        <div className="field">
          <p>Nombre</p>
          <TextField />
        </div>
        <div className="field">
          <p>Nombre</p>
          <TextField />
        </div>
        <div className="field">
          <p>Nombre</p>
          <TextField />
        </div>
      </div>
      <div className="actionsContainer">
        <a>Accion 1</a>
        <a>Accion 2</a>
        <a>Accion 3</a>
        <a>Accion 4</a>
      </div>
    </Container>
  );
}

export default withMainLayout(EditProfile);
