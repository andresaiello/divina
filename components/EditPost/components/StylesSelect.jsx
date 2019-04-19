import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { Chip, Paper } from '@material-ui/core';

const StyledPaper = styled(Paper)`
  display: flex;
  min-height: 50px;
  align-items: center;
  flex-wrap: wrap;
  padding: 7.5px;
  margin: 10px auto;
  max-width: 500px;

  .chip {
    margin: 2px;
  }

  .placeholder {
    margin: 0;
    color: #888;
    user-select: none;
  }
`;

function StylesSelect ({ handleDelete, selectedClothingStyles, ...rest }) {
  return (
    <StyledPaper
      {...rest}
    >
      {!selectedClothingStyles.length && <p className="placeholder">Toca aquí para agregar tus estilos</p>}
      {selectedClothingStyles.map(style => (
        <Chip
          className="chip"
          key={style.name}
          label={style.name}
          onDelete={() => handleDelete(style.name)}
        />
      ))}
    </StyledPaper>
  );
}

StylesSelect.defaultProps = {
  selectedClothingStyles: [],
};

StylesSelect.propTypes = {
  handleDelete: propTypes.func.isRequired,
  selectedClothingStyles: propTypes.arrayOf(propTypes.shape({})),
};

export default StylesSelect;
