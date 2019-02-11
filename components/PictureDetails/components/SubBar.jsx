import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Favorite, Visibility } from '@material-ui/icons';
import { Toolbar, Typography } from '@material-ui/core';

const StyledSubBar = styled(Toolbar)`
  p {
    margin: 0px 5px;
  }

  .favorite {
    color: red;
  }
`;

export default function SubBar ({ caption }) {
  return (
    <StyledSubBar>
      <p>500</p>
      <Visibility />
      <p>5</p>
      <Favorite className="favorite" />
      <Typography component="p">
        {caption}
      </Typography>
    </StyledSubBar>
  );
}

SubBar.propTypes = {
  caption: propTypes.string.isRequired,
};
