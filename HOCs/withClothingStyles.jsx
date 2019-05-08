import React from 'react';

import useClothingStyles from '~/Hooks/useClothingStyles';

export default BaseComponent =>
  function withClothingStyles(props) {
    const {
      post: { clothingStyles },
    } = props;
    const clothingStylesProps = useClothingStyles(clothingStyles.nodes);

    return <BaseComponent {...props} {...clothingStylesProps} />;
  };
