/* eslint-disable camelcase */
import React, { Component, useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  Avatar, TextField, Button, CircularProgress,
} from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { Mutation, Query } from 'react-apollo';
import Dropzone from 'react-dropzone';

import withMainLayout from '~/HOCs/withMainLayout';
import { User } from '~/lib/graphql';
import { Loader } from '~/components/shared';
import { Router } from '~/server/routes';
import { base64ToCloudinary, readImageAsBase64 } from '~/util';

const sidesPadding = '5%';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 400px;

  a {
    color: rgb(1, 145, 255);
  }

  .avatarContainer {
    background-color: rgb(241, 241, 241);
    border-bottom: 1px solid rgb(218, 218, 219);
    margin-top: 1px;
    padding: 10px 0px;

    .avatar {
      width: 80px;
      height: 80px;
      margin: 10px auto;
    }

    .profilePicInput {
      display: inline-block;
    }
  }

  .dataContainer {
    padding: 10px ${sidesPadding};

    .field {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      .centered {
        align-self: center;
      }

      p {
        display: inline;
        margin: 0px 10px 5px 0px;
      }

      .input {
        width: 70%;
      }
    }
  }

  .actionsContainer {
    text-align: left;
    background-color: rgb(241, 241, 241);
    border-top: 1px solid rgb(218, 218, 219);
    border-bottom: 1px solid rgb(218, 218, 219);
    margin: 10px 0;
    padding: 0 ${sidesPadding};

    a {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(218,218,219);
      padding: 5px 0px;
      margin: 5px 0px;

      :last-child {
        border-bottom: none;
      }
    }
  }
`;

function EditProfile (props) {
  return (
    <Query
      query={User.Queries.EDIT_PROFILE_GET_USER_PROFILE}
      notifyOnNetworkStatusChange
    >
      {({ data, loading, error }) => (loading
        ? <Loader />
        : error
          ? <div>Error!</div> // @todo better msg
          : <ProfileDetails {...props} user={data && data.profile.user} />
      )}
    </Query>
  );
}

function ProfileDetails ({ user, ...rest }) {
  const [state, setState] = useState({
    name: user.name,
    username: user.username,
    description: user.description,
    saving: false,
  });

  const [uploadingProfilePic, setUploadingProfilePic] = useState(false);

  async function onDropImage (acceptedFiles, rejectedFiles, updateDb) {
    setUploadingProfilePic(true);

    try {
      let fileToSend = null;
      acceptedFiles.forEach((file) => { fileToSend = file; });

      const { base64Img } = await readImageAsBase64(fileToSend);
      const { secure_url } = await base64ToCloudinary(base64Img);

      await updateDb({ variables: { newUrl: secure_url } });
      setUploadingProfilePic(false);
    } catch (e) {
      console.log(e);
      setUploadingProfilePic(false);
    }
  }

  function updateField (e) {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const {
    name, username, description, saving,
  } = state;

  if (saving) return <Loader />;

  // @todo: update cache on save changes

  return (
    <Container {...rest}>
      <Mutation
        mutation={User.Mutations.UPDATE_PROFILE_PIC}
      >
        {updateDb => (
          <div className="avatarContainer">
            {uploadingProfilePic
              ? <CircularProgress className="avatar" />
              : (
                <Dropzone
                  onDrop={(accepted, rejected) => { onDropImage(accepted, rejected, updateDb); }}
                  className="dropZone"
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="profilePicInput">
                      <Avatar className="avatar" src={user.profilePic} alt="Foto de perfil" />
                      <input {...getInputProps()} />
                      <a>Cambiar foto de perfil</a>
                    </div>
                  )}
                </Dropzone>
              )
            }
          </div>
        )}
      </Mutation>
      <div className="dataContainer">
        <div className="field">
          <p>Nombre</p>
          <TextField
            className="input"
            value={name}
            disabled
          />
        </div>
        <div className="field">
          <p>Usuario</p>
          <TextField
            className="input"
            name="username"
            value={username}
            disabled
          />
        </div>
        <div className="field">
          <p>Web</p>
          <TextField
            className="input"
          />
        </div>
        <div className="field">
          <p>Instagram</p>
          <TextField
            className="input"
            disabled
          />
        </div>
        <div className="field">
          <p className="centered">Descripción</p>
          <TextField
            className="input"
            name="description"
            value={description}
            multiline
            inputProps={{ maxLength: 100 }}
            onChange={updateField}
            rows={3}
          />
        </div>
      </div>
      <div className="actionsContainer">
        <a>
          Mis recompensas
          {' '}
          <ChevronRight />
        </a>
        <a>
          Mis prendas
          {' '}
          <ChevronRight />
        </a>
        <a>
          Notificaciones
          {' '}
          <ChevronRight />
        </a>
        <a>
          Términos y condiciones
          {' '}
          <ChevronRight />
        </a>
      </div>
      <Mutation
        mutation={User.Mutations.EDIT_DESCRIPTION}
      >
        {editUserDescription => (
          <Button
            color="primary"
            variant="contained"
            onClick={async () => {
              try {
                // @todo: update cache after this
                setState(prevState => ({ ...prevState, saving: true }));
                await editUserDescription({ variables: { description } });
                Router.pushRoute('myProfile');
              } catch (e) {
                console.log(e);
                Router.pushRoute('myProfile');
              }
            }}
          >
            Guardar cambios
          </Button>
        )}
      </Mutation>
    </Container>
  );
}

export default withMainLayout(EditProfile);
