import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Chip } from '@material-ui/core';

import { useClothingStylesPropTypes } from '~/Hooks/useClothingStyles';
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
    color: ${({ selected, theme }) => (selected ? theme.palette.secondary.main : null)};
    border-top: ${({ selected, theme }) =>
      selected ? `1px solid ${theme.palette.secondary.main}` : '1px solid transparent'};
    border-bottom: ${({ selected, theme }) =>
      selected ? `1px solid ${theme.palette.secondary.main}` : '1px solid transparent'};
  }
`;

export default function Filters({ clothingStylesData }) {
  const [isClothingStylesModalOpen, setIsClothingStylesModalOpen] = useState(false);
  const {
    clothingStyles,
    toggleStyleSelection,
    selectedClothingStyles,
    unselectStyle,
    persistCurrentState,
    backToPersistedState,
  } = clothingStylesData;

  function closeAndCancelSelection() {
    backToPersistedState();
    setIsClothingStylesModalOpen(false);
  }

  function openClothingStylesModal() {
    persistCurrentState();
    setIsClothingStylesModalOpen(true);
  }

  return (
    <Container>
      <div className="filters">
        <Filter onClick={openClothingStylesModal} selected={selectedClothingStyles.length > 0}>
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
        closeAndCancelSelection={closeAndCancelSelection}
        clothingStyles={clothingStyles}
        onStyleClick={toggleStyleSelection}
      />
    </Container>
  );
}

Filters.propTypes = {
  clothingStylesData: useClothingStylesPropTypes.isRequired,
};
