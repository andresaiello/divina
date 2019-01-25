import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

const StyledProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  margin: 0px 10px;

  .avatar {
    height: 70px;
    width: 70px;
  }
  
  .follow {
    text-align: center;

    h2 {
      margin: 5px 0px;
      font-size: 1rem;
      font-weight: normal;
    }
  }
  
  .icons {
  }

  .details {
    grid-column-start: span 2;
  }
`;

export default function ProfileInfo ({ action, ...rest }) {
  return (
    <StyledProfileInfo {...rest}>
      <div className="follow">
        <Avatar className="avatar" src="/static/girl.jpeg" alt="Foto de perfil" />
        <h2>chica123</h2>
        {action}
      </div>
      <div className="icons">
        <div>asd</div>
      </div>
      <div className="details">
        <div>Hola</div>
        <div>Me gusta la moda</div>
      </div>
    </StyledProfileInfo>
  );
}

ProfileInfo.propTypes = {
  action: propTypes.element.isRequired,
};
