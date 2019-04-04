import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { isFetchingMore, isRefreshing } from '~/util';

import PageVisibility from 'react-page-visibility';
import { Loader } from '../../shared';

import MessageList from './MessageList';
import InputText from './InputText';
import { CHAT_GET_MESSAGES, CHAT_SUB_NEW_MSG } from '~/lib/graphql/Chat';
import ChatHeadAppBar from './ChatHeadAppBar';

const StyledChat = styled.div`
  && {
    background-image: url("/static/chat-background.jpg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100vh;
    /* min-height: -webkit-fill-available; */
    max-height: -webkit-fill-available;
  }
`;


const StyledChat1 = styled.div`
  && {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1300;
    position: fixed;
  }
`;

const StyledChat2 = styled.div`
  && {
    height: 100%;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledChat3 = styled.div`
  && {
    width: 100%;
    margin: 0;
    height: 100%;
    max-width: 100%;
    max-height: none;
    border-radius: 0;
    flex: 0 1 auto;
    display: flex;
    position: relative;
    overflow-y: auto;
    flex-direction: column;
  }
`;

const StyledChat4 = styled.div`
  && {
    background-image: url("/static/chat-background.jpg");
    background-size: cover;
  }
`;


const Chat = class extends React.PureComponent {
  render () {
    const { chatGroupId } = this.props;

    return (
      <Query
        query={CHAT_GET_MESSAGES}
        variables={{ _id: chatGroupId }}
      >
        {({
          loading, error, data, subscribeToMore, networkStatus, refetch,
        }) => {
          let loader = null;
          let errorMessage = null;

          const { chatMessages } = data || { chatMessages: null };
          const { nodes, chatGroup } = chatMessages || { nodes: [], chatGroup: null };
          const messages = nodes;
          // shows the loader only if the user is fetching more content (scrolling) and not refreshing (pull up)
          if (loading && !isRefreshing(networkStatus)) loader = <Loader height="150" />;
          // @todo set a good error message
          if (error) errorMessage = <div>Error!</div>;
          // @todo add timeout and no connection error message to refetch and fetch more

          const more = () => subscribeToMore({
            document: CHAT_SUB_NEW_MSG,
            variables: { _id: chatGroupId },
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              // console.log(prev);
              // console.log(subscriptionData);
              // console.log(subscriptionData.data.messageCreated);
              return Object.assign({}, prev, {
                chatMessages: {
                  nodes: [...prev.chatMessages.nodes, subscriptionData.data.messageCreated].slice(0, 200),
                  __typename: 'ChatMessages',
                },

              });
            },
          });
          return (
            <PageVisibility onChange={isVisible => (isVisible && refetch())}>
              <StyledChat1>
                <StyledChat2>
                  <StyledChat3>
                    <ChatHeadAppBar chatGroup={chatGroup} />
                    <StyledChat4>
                      <MessageList messages={messages || []} subscribeToMore={more} />

                      <InputText chatGroupId={chatGroupId} />
                    </StyledChat4>
                  </StyledChat3>
                </StyledChat2>
              </StyledChat1>
            </PageVisibility>);
        }}
      </Query>

    );
  }
};

export default Chat;
