import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import classNames from 'classnames';

import { Link } from '~/server/routes';
import SecContext, { isAuthenticated } from '~/context/secContext';

const StyledLanding = styled.article`
  height: 100vh;
  width: 100%;
  color: white;
  background-image: url('/static/background01.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;

  video {
    position: fixed;
    min-width: 100%;
    min-height: 100%;
  }

  button {
    width: 300px;
  }

  .first-button {
    position: fixed;
    bottom: 14vh;
    right: 0;
    left: 0;
  }

  .second-button {
    position: fixed;
    bottom: 7vh;
    right: 0;
    left: 0;

    .logout {
      width: 150px;
      background: red;
      color: white;
    }
  }
`;

export default function Landing() {
  return (
    <StyledLanding>
      {/* <video autoPlay muted loop>
        <source src="/static/background.mp4" type="video/mp4" />
      </video> */}
      <SecContext.Consumer>
        {({ user }) =>
          !isAuthenticated(user) ? (
            <div className="content">
              <Link route="/login">
                <a>
                  <div className="first-button">
                    <Button className="button" variant="contained" color="primary">
                      Crear Cuenta
                    </Button>
                  </div>
                </a>
              </Link>
              <Link route="/login">
                <a>
                  <div className="second-button">
                    <Button className={classNames('button')} variant="contained" color="primary">
                      ¿Ya tienes una cuenta? Conectarse
                    </Button>
                  </div>
                </a>
              </Link>
            </div>
          ) : (
            <>
              <Link route="/feed" prefetch>
                <a>
                  <div className="first-button">
                    <Button className={classNames('button')} variant="contained" color="primary">
                      Bienvenid@
                      {` ${user.name}`}
                    </Button>
                  </div>
                </a>
              </Link>
              <Link route="/logout" prefetch>
                <a>
                  <div className="second-button">
                    <Button className="logout" variant="contained">
                      Cerrar sesión
                    </Button>
                  </div>
                </a>
              </Link>
            </>
          )
        }
      </SecContext.Consumer>
    </StyledLanding>
  );
}
