import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { DialogContentText } from '@material-ui/core';
import { Mutation } from 'react-apollo';

import { Post } from '~/lib/graphql';
import { Loader } from '~/components/shared';

const StyledContentText = styled(DialogContentText)`
  && {
    cursor: pointer;

    p {
      color: black;
      margin: 0;
    }
  }
`;

export default function ReportPost({ postId, close, BaseContent }) {
  return (
    <Mutation mutation={Post.Mutations.REPORT}>
      {(reportPost, { data, loading }) => {
        if (loading) return <Loader text="Denunciando post..." />;

        if (data) {
          return (
            <BaseContent
              close={close}
              content={
                <>
                  <StyledContentText>
                    <p>¡Gracias por tu denuncia!</p>
                  </StyledContentText>
                  <StyledContentText>
                    <p>La estaremos revisando pronto.</p>
                  </StyledContentText>
                </>
              }
            />
          );
        }

        return (
          <BaseContent
            close={close}
            content={
              <StyledContentText onClick={() => reportPost({ variables: { postId } })}>
                <p>Denunciar contenido</p>
              </StyledContentText>
            }
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
