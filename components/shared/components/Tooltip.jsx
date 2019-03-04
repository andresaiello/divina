import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Tooltip as MuiTooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function arrowGenerator (color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`,
      },
    },
  };
}

const useStyles = makeStyles(() => ({
  arrow: {
    position: 'absolute',
    fontSize: 6,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  bootstrapPopper: arrowGenerator('black'),
  bootstrapTooltip: {
    cursor: 'pointer',
    backgroundColor: 'black',
  },
  bootstrapPlacementLeft: {
    margin: '0 8px',
  },
  bootstrapPlacementRight: {
    margin: '0 8px',
  },
  bootstrapPlacementTop: {
    margin: '8px 0',
  },
  bootstrapPlacementBottom: {
    margin: '8px 0',
  },
  htmlPopper: arrowGenerator('#dadde9'),
  htmlTooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    border: '1px solid #dadde9',
  },
}));

const Content = styled.div`
  .action {
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
`;

export default function Tooltip ({ children, content, ...rest }) {
  const classes = useStyles();
  const [arrowRef, setArrowRef] = React.useState(null);

  return (
    <MuiTooltip
      interactive
      title={(
        <Content>
          {content}
          <span className={classes.arrow} ref={setArrowRef} />
        </Content>
      )}
      classes={{
        tooltip: classes.bootstrapTooltip,
        popper: classes.bootstrapPopper,
        tooltipPlacementLeft: classes.bootstrapPlacementLeft,
        tooltipPlacementRight: classes.bootstrapPlacementRight,
        tooltipPlacementTop: classes.bootstrapPlacementTop,
        tooltipPlacementBottom: classes.bootstrapPlacementBottom,
      }}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef,
            },
          },
        },
      }}
      {...rest}
    >
      {children}
    </MuiTooltip>
  );
}

Tooltip.propTypes = {
  children: propTypes.element.isRequired,
  content: propTypes.element.isRequired,
};
