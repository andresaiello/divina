import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { DialogContentText } from '@material-ui/core';
import { Mutation } from 'react-apollo';

import { Post } from '~/lib/graphql';
import { Loader } from '~/components/shared';

const LinkText = styled(DialogContentText)`
  cursor: pointer;
`;

export default function ReportPost ({ postId, close, BaseContent }) {
  return (
    <Mutation
      mutation={Post.Mutations.REPORT}
    >
      {(reportPost, { data, loading }) => {
        if (loading) return <Loader text="Denunciando post..." />;

        if (data) {
          return (
            <BaseContent
              close={close}
              content={(
                <>
                  <DialogContentText>
                    ¡Gracias por tu denuncia!
                  </DialogContentText>
                  <DialogContentText>
                    La estaremos revisando pronto.
                  </DialogContentText>
                </>
              )}
            />
          );
        }

        return (
          <BaseContent
            close={close}
            content={(
              <LinkText
                color="primary"
                onClick={() => reportPost({ variables: { postId } })}
              >
                Denunciar contenido
              </LinkText>
            )}
          />
        );
      }}
    </Mutation>
  );
}

ReportPost.propTypes = {
  close: propTypes.func.isRequired,
  postId: propTypes.string.isRequired,
  BaseContent: propTypes.func.isRequired,
};
