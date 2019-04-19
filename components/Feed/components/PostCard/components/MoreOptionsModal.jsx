import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {
  Button, DialogActions, DialogContent, DialogContentText,
} from '@material-ui/core';
import { Mutation } from 'react-apollo';

import { Modal, Loader } from '~/components/shared';
import { Post } from '~/lib/graphql';

const LinkText = styled(DialogContentText)`
  cursor: pointer;
`;

export default function MoreOptionsModal ({ isOpen, close, postId }) {
  return (
    <Modal
      isOpen={isOpen}
      close={close}
    >
      <Mutation
        mutation={Post.Mutations.REPORT}
      >
        {(reportPost, { data, loading }) => {
          if (data) {
            return (
              <>
                <DialogContent>
                  <DialogContentText>
                    ¡Gracias por tu denuncia!
                  </DialogContentText>
                  <DialogContentText>
                    La estaremos revisando pronto.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={close} color="primary">
                    Cerrar
                  </Button>
                </DialogActions>
              </>
            );
          }

          if (loading) {
            return (
              <Loader text="Denunciando post..." />
            );
          }

          return (
            <>
              <DialogContent>
                <LinkText
                  color="primary"
                  onClick={() => reportPost({ variables: { postId } })}
                >
                  Denunciar contenido
                </LinkText>
              </DialogContent>
              <DialogActions>
                <Button onClick={close} color="primary">
                  Cancelar
                </Button>
              </DialogActions>
            </>
          );
        }}
      </Mutation>
    </Modal>
  );
}

MoreOptionsModal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
  postId: propTypes.string.isRequired,
};
