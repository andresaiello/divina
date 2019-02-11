import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const StyledTextField = styled(TextField)`
  && {
    width: 90%;
    margin: 0px auto;
  }
`;

function Input ({ onChange, value }) {
  return (
    <StyledTextField
      multiline
      onChange={onChange}
      value={value}
      rows={4}
      label="Añade una leyenda sobre la foto"
    />
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string,
};

export default Input;
