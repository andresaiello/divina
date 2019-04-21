import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { DialogContentText, Button } from '@material-ui/core';

import { Post } from '~/lib/graphql';
import { Loader } from '~/components/shared';
import { Router } from '~/server/routes';

const LinkText = styled(DialogContentText)`
  && {
    cursor: pointer;
    color: red;
  }
`;

function redirect () {
  if (Router.route === '/feed') {
    document.location.reload();
  } else {
    Router.pushRoute('feed');
  }
}

const RedirectButton = () => (
  <Button onClick={redirect} color="primary">
    Aceptar
  </Button>
);

export default function DeletePost ({ postId, close, BaseContent }) {
  return (
    <Mutation
      mutation={Post.Mutations.DELETE}
    >
      {(deletePost, { data, loading }) => {
        if (loading) return <Loader text="Borrando post..." />;

        if (data) {
          return (
            <BaseContent
              close={close}
              content={(
                <DialogContentText>
                  ¡El post ha sido eliminado!
                </DialogContentText>
              )}
              customCloseButton={<RedirectButton />}
            />
          );
        }

        return (
          <BaseContent
            close={close}
            content={(
              <LinkText
                onClick={() => deletePost({ variables: { _id: postId } })}
              >
                Eliminar post
              </LinkText>
            )}
          />
        );
      }}
    </Mutation>
  );
}

DeletePost.propTypes = {
  close: propTypes.func.isRequired,
  postId: propTypes.string.isRequired,
  BaseContent: propTypes.func.isRequired,
};
