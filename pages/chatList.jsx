import React from 'react';
import SecContext from '~/context/secContext';

import { ChatList } from '~/components/Chat';

export default class extends React.Component {
  static contextType = SecContext;

  render () {
    const { user } = this.context;
    if (!user || !user.username) return <div>Necesitás estar logueado</div>; // @todo: set better error

    return (
      <ChatList />
    );
  }
}
