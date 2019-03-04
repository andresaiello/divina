import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar, TextField, Button } from '@material-ui/core';
import { Mutation, Query } from 'react-apollo';

import withMainLayout from '~/HOCs/withMainLayout';
import { Profile, User } from '~/lib/graphql';
import { Loader } from '~/components/shared';
import { Router } from '~/server/routes';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 400px;
  padding: 0px 5%;

  .avatarContainer {
    .avatar {
      width: 80px;
      height: 80px;
      margin: 10px auto;
    }
  }

  .dataContainer {
    .field {
      display: grid;
      align-items: flex-start;

      p {
        display: inline;
        margin: 0px 10px 5px 0px;
      }
    }
  }

  .actionsContainer {
    text-align: left;

    a {
      display: block;
      color: #007EC1;
      margin: 10px 0px;
    }
  }
`;

function EditProfile (props) {
  return (
    <Query
      query={User.Queries.GET_PROFILE}
      notifyOnNetworkStatusChange
    >
      {({ data: { profile }, error, loading }) => (loading
        ? <Loader />
        : error
          ? <div>Error!</div> // @todo better msg
          : <ProfileDetails {...props} user={profile.user} />
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

  state = {
    // eslint-disable-next-line
    description: this.props.user.description,
    saving: false,
  }

  changeDescription = (e) => {
    const { value } = e.target;
    this.setState({ description: value });
  }

  render () {
    const { user, ...rest } = this.props;
    const { description, saving } = this.state;

    if (saving) return <Loader />;

    return (
      <Container {...rest}>
        <div className="avatarContainer">
          <Avatar className="avatar" src={user.profilePic} alt="Foto de perfil" />
          <a>Cambiar foto de perfil</a>
        </div>
        <div className="dataContainer">
          <div className="field">
            <TextField
              multiline
              onChange={this.changeDescription}
              value={description}
              rows={3}
            />
            <p>Descripción</p>
          </div>
          <div className="field">
            <TextField />
            <p>Nombre</p>
          </div>
          <div className="field">
            <TextField />
            <p>Nombre</p>
          </div>
          <div className="field">
            <TextField />
            <p>Nombre</p>
          </div>
        </div>
        <div className="actionsContainer">
          <a>Accion 1</a>
          <a>Accion 2</a>
          <a>Accion 3</a>
          <a>Accion 4</a>
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
