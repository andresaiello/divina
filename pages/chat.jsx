import React from 'react';
import propTypes from 'prop-types';
import SecContext from '~/context/secContext';

import { Chat } from '~/components/Chat';
import withRequiredLogin from '~/HOCs/withRequiredLogin';

class ChatPage extends React.Component {
  static contextType = SecContext;

  static propTypes = {
    chatGroupId: propTypes.string.isRequired,
  };

  static async getInitialProps({ query }) {
    return { ...query };
  }

  render() {
    const { chatGroupId } = this.props;
    const { user } = this.context;
    const { loading } = this.state;

    return <Chat chatGroupId={chatGroupId} />;
  }
}

export default withRequiredLogin(ChatPage);
