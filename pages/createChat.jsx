import React from 'react';
import propTypes from 'prop-types';
import SecContext from '~/context/secContext';

import { CreateChat } from '~/components/Chat';

export default class extends React.Component {
  static contextType = SecContext;

  static async getInitialProps({ query }) {
    return { ...query };
  }

  render() {
    const { user } = this.context;
    if (!user || !user.username) return <div>Necesitás estar logueado</div>; // @todo: set better error

    return <CreateChat />;
  }
}
