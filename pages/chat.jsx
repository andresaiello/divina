import React from 'react';
import SecContext from '~/context/secContext';

import { Chat, ChatList, ChatView } from '~/components/Chat';
import { LoadingScreen } from '~/components/shared';
import withRequiredLogin from '~/HOCs/withRequiredLogin';

class ChatPage extends React.Component {
  static contextType = SecContext;

  render () {
    const { user } = this.context;
    const { loading } = this.state;

    return <ChatView />;
  }
}

export default withRequiredLogin(ChatPage);
