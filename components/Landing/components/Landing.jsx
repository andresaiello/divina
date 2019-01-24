import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { mediaQuery } from '~/constants';
import { Link } from '~/routes';

const StyledLanding = styled.article`
  height: 100vh;
  width: 100%;
  color: white;

  video {
    position: fixed;
    min-width: 100%; 
    min-height: 100%;
  }

  .content {
    position: fixed;
    bottom: 7vh;
    width: 100%;
    text-align: center;

    .button {
      width: 300px;
    }
  }
`;

export default function Landing () {
  return (
    <StyledLanding>
      <video autoPlay muted loop>
        <source src="/static/background.mp4" type="video/mp4" />
      </video>
      <Link route="feed" prefetch>
        <a>
          <div className="content">
            <Button className="button" variant="contained" color="primary">
          Crear Cuenta
            </Button>
            <p>¿Ya tienes una cuenta? Conectarse</p>
          </div>
        </a>
      </Link>
    </StyledLanding>
  );
}
