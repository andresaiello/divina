import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Query } from 'react-apollo';
import { isFetchingMore, isRefreshing } from '~/util';

import PageVisibility from 'react-page-visibility';
import { Loader } from '../../shared';

import { CHAT_GET_CHAT_GROUPS } from '~/lib/graphql/Chat';
import ChatListItem from './ChatListItem';
import ChatListHeadAppBar from './ChatListHeadAppBar';

const StyledChatList = styled.div`
  && {
    display: flex;
    align-items: center;
    flex-direction: column;
    /* header + footer */
    /* height: calc(100vh - 112px); */
    overflow-y: scroll;

  }

`;

const ChatList = class extends React.PureComponent {
  render () {
    return (
      <Query query={CHAT_GET_CHAT_GROUPS}>
        {({
          loading, error, data, networkStatus, refetch,
        }) => {
          let loader = null;
          let errorMessage = null;
          const { chatGroups } = data || { chatGroups: null };
          const { nodes } = chatGroups || { nodes: [] };
          // shows the loader only if the user is fetching more content (scrolling) and not refreshing (pull up)
          if (loading && !isRefreshing(networkStatus)) loader = <Loader height="150" />;
          // @todo set a good error message
          if (error) errorMessage = <div>Error!</div>;
          // @todo add timeout and no connection error message to refetch and fetch more

          return (
            <PageVisibility onChange={isVisible => (isVisible && refetch())}>
              <StyledChatList>
                <ChatListHeadAppBar />
                {nodes.map((elem, index) => (
                  <ChatListItem item={elem} key={index} />
                ))}
              </StyledChatList>
            </PageVisibility>);
        }}
      </Query>

    );
  }
};

export default ChatList;
