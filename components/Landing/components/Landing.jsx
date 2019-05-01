import React from 'react';
import styled from 'styled-components';
import { Button, NoSsr } from '@material-ui/core';
import classNames from 'classnames';
import Div100vh from 'react-div-100vh';

import { Link } from '~/server/routes';
import SecContext, { isAuthenticated } from '~/context/secContext';
import Carousel from './Carousel';

const StyledLanding = styled(Div100vh)`
  width: 100%;

  button {
    width: 300px;
  }

  a {
    text-decoration: none;
  }

  .button {
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    height: 36px;
    margin: auto;

    &.first {
      bottom: 20vh;
    }

    &.second {
      bottom: 13vh;

      .logout {
        width: 150px;
        background: red;
        color: white;
      }
    }
  }

  .first-button {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 20vh;
    right: 0;
    left: 0;
    z-index: 10;
  }

  .second-button {
    z-index: 10;
    position: fixed;
    bottom: 13vh;
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
      <SecContext.Consumer>
        {({ user }) =>
          !isAuthenticated(user) ? (
            <div className="content">
              <Link route="/login">
                <a>
                  <div className="button first">
                    <Button className="button" variant="contained" color="primary">
                      Crear Cuenta
                    </Button>
                  </div>
                </a>
              </Link>
              <Link route="/login">
                <a>
                  <div className="button second">
                    <Button className={classNames('button')} variant="contained" color="primary">
                      ¿Ya tienes una cuenta? Conectarse
                    </Button>
                  </div>
                </a>
              </Link>
            </div>
          ) : (
            <>
              <div className="button first">
                <Link route="/feed" prefetch>
                  <a>
                    <Button className={classNames('button')} variant="contained" color="primary">
                      Bienvenid@
                      {` ${user.name}`}
                    </Button>
                  </a>
                </Link>
              </div>
              <div className="button second">
                <Link route="/logout" prefetch>
                  <a>
                    <Button className="logout" variant="contained">
                      Cerrar sesión
                    </Button>
                  </a>
                </Link>
              </div>
            </>
          )
        }
      </SecContext.Consumer>
      <NoSsr>
        <Carousel />
      </NoSsr>
    </StyledLanding>
  );
}
