import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';

const FOOTER_HEIGHT = 60;

export default class InfiniteScroll extends Component {
  static defaultProps = {
    // children: null,
  };

  static propTypes = {
    onScrollBottom: propTypes.func.isRequired,
    // children: propTypes.oneOfType([propTypes.arrayOf(propTypes.element), propTypes.element]),
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight + FOOTER_HEIGHT) >= scrollHeight;

    if (scrolledToBottom) {
      const { onScrollBottom } = this.props;
      onScrollBottom();
    }
  };

  render() {
    const { children } = this.props;

    return <Fragment>{children}</Fragment>;
  }
}
