import React from 'react';
import styled from 'styled-components';
import { Favorite, Visibility } from '@material-ui/icons';
import { Toolbar } from '@material-ui/core';


const StyledSubBar = styled(Toolbar)`
  p {
    margin: 0px 5px;
  }

  .favorite {
    color: red;
  }
`;

export default function SubBar () {
  return (
    <StyledSubBar>
      <p>500</p>
      <Visibility />
      <p>5</p>
      <Favorite className="favorite" />
    </StyledSubBar>
  );
}
