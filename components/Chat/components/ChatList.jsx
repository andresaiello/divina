import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { isFetchingMore, isRefreshing } from '~/util';

import withMainLayout from '~/HOCs/withMainLayout';

import PageVisibility from 'react-page-visibility';
import { Loader } from '../../shared';

import { CHAT_GET_CHAT_GROUPS } from '~/lib/queries';

const StyledChatList = styled.div`

`;

const ChatList = class extends React.Component {
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
                <ul>
                  {nodes.map(elem => (
                    <li>
Creador:
                      {' '}
                      {elem.author.username}
                      {' '}
|
                      {' '}
                      {elem.caption}
                    </li>
                  ))}
                </ul>
              </StyledChatList>
            </PageVisibility>);
        }}
      </Query>

    );
  }
};

export default withMainLayout(ChatList);
