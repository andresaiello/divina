import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Favorite, Visibility } from '@material-ui/icons';
import { Toolbar, Typography } from '@material-ui/core';

const StyledSubBar = styled(Toolbar)`
  flex-wrap: wrap;

  span {
    vertical-align: super;
    margin: 0px 7.5px 0px 5px;
  }

  svg {
    margin-right: 5px;
  }

  p {
    margin: 0px 5px;
    width: 100%;
  }

  .favorite {
    color: red;
  }
`;

export default function SubBar ({ caption }) {
  return (
    <StyledSubBar>
      <div>
        <span>500</span>
        <Visibility />
        <span>5</span>
        <Favorite className="favorite" />
      </div>
      <Typography component="p">
        {caption}
      </Typography>
    </StyledSubBar>
  );
}

SubBar.propTypes = {
  caption: propTypes.string.isRequired,
};
