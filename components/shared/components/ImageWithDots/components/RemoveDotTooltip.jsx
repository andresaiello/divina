import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

import Tooltip from '../../Tooltip';
import { Post } from '~/lib/graphql';

export default function RemoveDotTooltip ({
  children, postId, dots, dotId, ...rest
}) {
  return (
    <Tooltip
      content={(
        <Fragment>
          <Mutation
            mutation={Post.Mutations.DELETE_DOT}
            variables={{ dotId, postId }}
            optimisticResponse={{
              deleteDot: {
                _id: postId,
                dots: {
                  _id: postId,
                  nodes: dots.filter(dot => dot._id !== dotId),
                  __typename: 'Dots',
                },
                __typename: 'Post',
              },
              __typename: 'Mutation',
            }}
          >
            {deleteDot => (
              <div
                onClick={deleteDot}
                role="button"
                tabIndex={0}
              >
                Eliminar dot
              </div>
            )}
          </Mutation>
        </Fragment>
      )}
      {...rest}
    >
      {children}
    </Tooltip>
  );
}

RemoveDotTooltip.propTypes = {
  postId: propTypes.string.isRequired,
  dotId: propTypes.string.isRequired,
  dots: propTypes.arrayOf(propTypes.shape({
    _id: propTypes.string.isRequired,
    __typename: propTypes.string.isRequired,
  })).isRequired,
};
