import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import Tooltip from '../../Tooltip';

function DotTooltip ({
  children, brandName, brandWebsite, price, onClick, ...rest
}) {
  const text = `${brandName} | ${price}`;

  return (
    <Tooltip
      content={(onClick
        ? (
          <div
            className="action"
            onClick={onClick}
            role="button"
          >
            {text}
          </div>
        )
        : (
          <a
            className="action"
            target="_blank"
            rel="noopener noreferrer"
            href={brandWebsite}
          >
            {text}
          </a>
        )
      )}
      {...rest}
    >
      {children}
    </Tooltip>
  );
}

DotTooltip.propTypes = {
  children: propTypes.element.isRequired,
  brandName: propTypes.string.isRequired,
  brandWebsite: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
};

export default DotTooltip;
