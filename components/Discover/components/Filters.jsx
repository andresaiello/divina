import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Chip } from '@material-ui/core';
import useClothingStyles from '~/Hooks/useClothingStyles';
import { ClothingStylesModal } from '~/components/shared';

const Container = styled.div`
  padding: 0 10px;

  .filters {
    border-bottom: 1px solid rgb(216, 216, 216);
  }

  .currentFilters {
    margin-top: 4px;

    .chip {
      margin: 2px;
    }
  }
`;

const Filter = styled(Typography).attrs({
  variant: 'h6',
  component: 'h6',
  color: 'inherit',
})`
  && {
    display: inline-block;
    padding-bottom: 3px;
    color: ${({ selected, theme }) => (selected ? theme.palette.primary.main : null)};
    border-top: ${({ selected, theme }) => (selected ? `1px solid ${theme.palette.primary.main}` : '1px solid transparent')};
    border-bottom: ${({ selected, theme }) => (selected ? `1px solid ${theme.palette.primary.main}` : '1px solid transparent')};
  }
`;

export default function Filters ({ clothingStylesData }) {
  const [isClothingStylesModalOpen, setIsClothingStylesModalOpen] = useState(false);
  const {
    clothingStyles, toggleStyleSelection, selectedClothingStyles, unselectStyle,
  } = clothingStylesData;

  return (
    <Container>
      <div className="filters">
        <Filter
          onClick={() => setIsClothingStylesModalOpen(true)}
          selected={selectedClothingStyles.length > 0}
        >
          Estilos
        </Filter>
      </div>
      <div className="currentFilters">
        {selectedClothingStyles.map(style => (
          <Chip
            className="chip"
            key={style.name}
            label={style.name}
            onDelete={() => unselectStyle(style.name)}
          />
        ))}
      </div>
      <ClothingStylesModal
        isOpen={isClothingStylesModalOpen}
        close={() => setIsClothingStylesModalOpen(false)}
        clothingStyles={clothingStyles}
        onStyleClick={toggleStyleSelection}
      />
    </Container>
  );
}

Filters.propTypes = {
  clothingStylesData: propTypes.shape({
    clothingStyles: propTypes.arrayOf(propTypes.shape({})).isRequired,
    toggleStyleSelection: propTypes.func.isRequired,
    selectedClothingStyles: propTypes.arrayOf(propTypes.shape({})).isRequired,
    unselectStyle: propTypes.func.isRequired,
  }).isRequired,
};
