import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar, TextField, Button } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { Mutation, Query } from 'react-apollo';

import withMainLayout from '~/HOCs/withMainLayout';
import { Profile, User } from '~/lib/graphql';
import { Loader } from '~/components/shared';
import { Router } from '~/server/routes';

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
      query={User.Queries.GET_PROFILE}
      notifyOnNetworkStatusChange
    >
      {({ data, error, loading }) => (loading
        ? <Loader />
        : error
          ? <div>Error!</div> // @todo better msg
          : <ProfileDetails {...props} user={data && data.profile.user} />
      )}
    </Query>
  );
}

class ProfileDetails extends Component {
  static propTypes = {
    user: propTypes.shape({
      description: propTypes.string.isRequired,
      profilePic: propTypes.string.isRequired,
    }).isRequired,
  }

  constructor (props) {
    super(props);

    const { user } = props;

    this.state = {
      description: user.description,
      username: user.username,
      saving: false,
    };
  }

  updateField = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render () {
    const { user, ...rest } = this.props;
    const { username, description, saving } = this.state;

    if (saving) return <Loader />;

    // @todo: update cache on save changes

    return (
      <Container {...rest}>
        <div className="avatarContainer">
          <Avatar className="avatar" src={user.profilePic} alt="Foto de perfil" />
          <a>Cambiar foto de perfil</a>
        </div>
        <div className="dataContainer">
          <div className="field">
            <p>Nombre</p>
            <TextField
              className="input"
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
              onChange={this.updateField}
              rows={2}
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
          mutation={Profile.Mutations.EDIT_DESCRIPTION}
        >
          {editUserDescription => (
            <Button
              color="primary"
              variant="contained"
              onClick={async () => {
                try {
                  // @todo: update cache after this
                  this.setState({ saving: true });
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
}

export default withMainLayout(EditProfile);
