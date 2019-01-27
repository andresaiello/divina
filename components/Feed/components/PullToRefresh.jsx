import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';


class Pullable extends React.Component {
  constructor (props) {
    super(props);

    this.clearTouchStatus();

    this.state = {
      status: 'ready',
      height: 0,
    };
  }

  componentDidMount () {
    window.addEventListener('touchstart', this.onTouchStart);
    window.addEventListener('touchmove', this.onTouchMove, { passive: false });
    window.addEventListener('touchend', this.onTouchEnd);
  }

  componentWillUnmount () {
    window.removeEventListener('touchstart', this.onTouchStart);
    window.removeEventListener('touchmove', this.onTouchMove, { passive: false });
    window.removeEventListener('touchend', this.onTouchEnd);

    clearTimeout(this.refreshCompletedTimeout);
    clearTimeout(this.resetTimeout);
  }

  clearTouchStatus = () => {
    this.pullStartY = null;
    this.pullMoveY = null;
    this.dist = 0;
    this.distResisted = 0;
    this.ignoreTouches = false;
  };

  onTouchStart = (e) => {
    if (this.props.disabled || this.ignoreTouches) return;

    if (this.state.status === 'ready' && this.props.shouldPullToRefresh()) {
      this.pullStartY = e.touches[0].screenY;
    } else {
      this.pullStartY = null;
    }
  };

  onTouchMove = (e) => {
    if (this.props.disabled || this.ignoreTouches || this.pullStartY === null) return;

    this.pullMoveY = e.touches[0].screenY;
    this.dist = this.pullMoveY - this.pullStartY;

    if (this.dist > 0) {
      e.preventDefault();

      this.distResisted = Math.min(this.dist / this.props.resistance, this.props.distThreshold);

      this.setState({ status: 'pulling', height: this.distResisted }, () => {
        if (this.distResisted === this.props.distThreshold) this.refresh();
      });
    }
  };

  onTouchEnd = (e) => {
    if (this.props.disabled || this.ignoreTouches) return;

    if (this.state.status === 'pulling') {
      this.ignoreTouches = true;
      this.setState({ status: 'pullAborted', height: 0 }, () => {
        this.reset(this.props.resetDuration);
      });
    } else {
      this.reset();
    }
  };

  refresh = () => {
    this.ignoreTouches = true;
    this.setState({ status: 'refreshing' }, async () => {
      await this.props.onRefresh();
      this.setState({ status: 'refreshCompleted', height: 0 }, () => {
        this.reset(this.props.resetDuration);
      });
    });
  };

  reset = (delay = 0) => {
    this.resetTimeout = setTimeout(() => {
      this.clearTouchStatus();
      this.setState({ status: 'ready' });
    }, delay);
  };

  render () {
    const {
      className, centerSpinner, resetDuration, resetEase, children,
    } = this.props;
    const { status, height } = this.state;
    const shouldReset = status === 'pullAborted' || status === 'refreshCompleted';

    return (
      <React.Fragment>
        <Container
          {...{
            className, height, centerSpinner, resetDuration, resetEase, shouldReset,
          }}
        >
          <CircularProgress />
        </Container>
        {children}
      </React.Fragment>
    );
  }
}

Pullable.defaultProps = {
  className: 'pullable',
  centerSpinner: true,
  distThreshold: 72,
  resistance: 2.5,
  resetDuration: 400,
  resetEase: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  shouldPullToRefresh: () => window.scrollY <= 0,
  disabled: false,
};

Pullable.propTypes = {
  onRefresh: propTypes.func.isRequired,
  className: propTypes.string,
  centerSpinner: propTypes.bool,
  distThreshold: propTypes.number,
  resistance: propTypes.number,
  resetDuration: propTypes.number,
  resetEase: propTypes.string,
  shouldPullToRefresh: propTypes.func,
  disabled: propTypes.bool,
};

const Container = styled.div.attrs(props => ({
  style: {
    height: props.height,
    alignItems: props.centerSpinner ? 'center' : 'flex-start',
    transition: props.shouldReset ? `height ${props.resetDuration}ms ${props.resetEase}` : 'none',
  },
}))`
  display: flex;
  overflow: hidden;
  justify-content: center;
  pointer-events: none;
`;

export default Pullable;
