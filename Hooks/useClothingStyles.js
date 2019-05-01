import { useState } from 'react';
import propTypes from 'prop-types';

import { clothingStyles as baseClothingStyles } from '~/constants';

const localClothingStyles = baseClothingStyles.map(s => ({ ...s }));
const toggle = style => ({ ...style, selected: !style.selected });
const select = style => ({ ...style, selected: true });
const unselect = style => ({ ...style, selected: false });
const parseInitialSelection = initialSelection => initialSelection.map(item => item.name);
const mergeWithInitialSelection = (local, initialSelection) => {
  if (initialSelection && initialSelection.length) {
    const merged = local.map(clothingStyle =>
      initialSelection.indexOf(clothingStyle.name) > -1 ? select(clothingStyle) : clothingStyle,
    );

    const selection = initialSelection.map(selectedE =>
      local.find(localE => localE.name === selectedE),
    );

    return {
      merged,
      selection,
    };
  }

  return {
    merged: local,
    selection: [],
  };
};

export default function useClothingStyles(initialSelection = []) {
  const { merged, selection } = mergeWithInitialSelection(
    localClothingStyles,
    parseInitialSelection(initialSelection),
  );

  const [clothingStyles, setClothingStyles] = useState(merged);
  const [selectedClothingStyles, setSelectedClothingStyles] = useState(selection);
  const [persistedState, setPersistedState] = useState(null);

  function toggleStyleSelection(styleName) {
    const newSelection = clothingStyles.map(s => (s.name === styleName ? toggle(s) : s));

    setClothingStyles(newSelection);
    setSelectedClothingStyles(newSelection.filter(s => s.selected));
  }

  function selectStyle(styleName) {
    const newSelection = clothingStyles.map(s => (s.name === styleName ? select(s) : s));

    setClothingStyles(newSelection);
    setSelectedClothingStyles(newSelection.filter(s => s.selected));
  }

  function unselectStyle(styleName) {
    const newSelection = clothingStyles.map(s => (s.name === styleName ? unselect(s) : s));

    setClothingStyles(newSelection);
    setSelectedClothingStyles(newSelection.filter(s => s.selected));
  }

  function unselectAll() {
    const newSelection = clothingStyles.map(s => unselect(s));

    setClothingStyles(newSelection);
    setSelectedClothingStyles(newSelection.filter(s => s.selected));
  }

  /**
   * Persists current state, useful to go back if the user is doing a new selection and cancels it
   */
  function persistCurrentState() {
    setPersistedState([...clothingStyles]);
  }

  function backToPersistedState() {
    setClothingStyles(persistedState);
    setSelectedClothingStyles(persistedState.filter(s => s.selected));
  }

  return {
    clothingStyles,
    selectedClothingStyles,
    toggleStyleSelection,
    selectStyle,
    unselectStyle,
    unselectAll,
    persistCurrentState,
    backToPersistedState,
  };
}

export const clothingStylePropTypes = propTypes.shape({
  name: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
});

export const useClothingStylesPropTypes = propTypes.shape({
  clothingStyles: propTypes.arrayOf(clothingStylePropTypes.isRequired).isRequired,
  toggleStyleSelection: propTypes.func.isRequired,
  selectedClothingStyles: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      imgUrl: propTypes.string.isRequired,
      selected: propTypes.bool.isRequired,
    }),
  ).isRequired,
  unselectStyle: propTypes.func.isRequired,
});
