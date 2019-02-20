import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const query = gql`
 query GET_CHATS {
    allMessages  {
      id
      from
      text
    }
  }
`;

const subscription = gql`
subscription messageCreated {
  messageCreated {
    id
    from
    text
  }
}
`;


const MessageItem = ({ message }) => (
  <li style={{ borderTop: '1px solid lightgray' }}>
    <p>
      {message.text}
      {' '}
      {' '}
    </p>
  </li>
);

const MessageListView = class extends React.PureComponent {
  componentDidMount () {
    this.props.subscribeToMore();
  }

  render () {
    const { data } = this.props;
    return (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data.allMessages.map(message => <MessageItem key={message.id} message={message} />)}
      </ul>
    );
  }
};


const MessageList = () => (
  <Query query={query}>
    {({
      loading, error, data, subscribeToMore,
    }) => {
      if (loading) return <p>Loading...</p>;
      if (error) {
        return (
          <p>
Error:
            {' '}
            {error.message}
          </p>
        );
      }
      const more = () => subscribeToMore({
        document: subscription,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          console.log(subscriptionData.data);
          console.log(subscriptionData.data.messageCreated);
          // const { mutation, node } = subscriptionData.data.allMessages;
          // if (mutation !== 'CREATED') return prev;
          // return Object.assign({}, prev, {
          //   allMessages: [node, ...prev.allMessages].slice(0, 20),
          // });
          return Object.assign({}, prev, {
            allMessages: [subscriptionData.data.messageCreated, ...prev.allMessages].slice(0, 20),
          });

        },
      });
      return <MessageListView data={data} subscribeToMore={more} />;
    }}
  </Query>
);

export default MessageList;
