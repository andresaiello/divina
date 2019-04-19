import { clothingStyles as baseClothingStyles } from '~/constants';
import { useState } from 'react';

const localClothingStyles = baseClothingStyles.map(s => ({ ...s }));
const toggle = style => ({ ...style, selected: !style.selected });
const select = style => ({ ...style, selected: true });
const unselect = style => ({ ...style, selected: false });
const parseInitialSelection = initialSelection => initialSelection.map(item => item.name);
const mergeWithInitialSelection = (local, initialSelection) => {
  if (initialSelection && initialSelection.length) {
    const merged = local.map(clothingStyle => (initialSelection.indexOf(clothingStyle.name) > -1
      ? select(clothingStyle)
      : clothingStyle));

    const selection = initialSelection.map(selectedE => local.find(localE => localE.name === selectedE));

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

export default function useClothingStyles (initialSelection = []) {
  const { merged, selection } = mergeWithInitialSelection(localClothingStyles, parseInitialSelection(initialSelection));
  const [clothingStyles, setClothingStyles] = useState(merged);
  const [selectedClothingStyles, setSelectedClothingStyles] = useState(selection);

  function toggleStyleSelection (styleName) {
    const newSelection = clothingStyles.map(s => (s.name === styleName
      ? toggle(s)
      : s
    ));

    setClothingStyles(newSelection);
    setSelectedClothingStyles(newSelection.filter(s => s.selected));
  }

  function selectStyle (styleName) {
    const newSelection = clothingStyles.map(s => (s.name === styleName
      ? select(s)
      : s
    ));

    setClothingStyles(newSelection);
    setSelectedClothingStyles(newSelection.filter(s => s.selected));
  }

  function unselectStyle (styleName) {
    const newSelection = clothingStyles.map(s => (s.name === styleName
      ? unselect(s)
      : s
    ));

    setClothingStyles(newSelection);
    setSelectedClothingStyles(newSelection.filter(s => s.selected));
  }

  return {
    clothingStyles,
    selectedClothingStyles,
    toggleStyleSelection,
    selectStyle,
    unselectStyle,
  };
}
