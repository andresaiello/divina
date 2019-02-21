import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import withMainLayout from '~/HOCs/withMainLayout';

import PageVisibility from 'react-page-visibility';
import { Loader } from '../../shared';

import MessageList from './MessageList';
import InputText from './InputText';
import { CHAT_GET_MSG, CHAT_SUB_NEW_MSG } from '~/lib/queries';


const StyledChat = styled.div`

`;

const Chat = class extends React.Component {
  state = {
    isVisible: null,
  }

  handleVisibilityChange = (isVisible) => {
    console.log(isVisible);
    this.setState({ isVisible });
  }

  render () {
    return (
      <PageVisibility onChange={this.handleVisibilityChange}>
        <Query query={CHAT_GET_MSG}>
          {({
            loading, error, data, subscribeToMore, networkStatus, refetch,
          }) => {
            let loader = null;
            let errorMessage = null;
            const { allMessages } = data || { allMessages: null };
            // shows the loader only if the user is fetching more content (scrolling) and not refreshing (pull up)
            if (loading && !isRefreshing(networkStatus)) loader = <Loader height="150" />;
            // @todo set a good error message
            if (error) errorMessage = <div>Error!</div>;
            if (this.state.isVisible) { refetch(); }
            // @todo add timeout and no connection error message to refetch and fetch more


            const more = () => subscribeToMore({
              document: CHAT_SUB_NEW_MSG,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                // console.log(subscriptionData.data);
                // console.log(subscriptionData.data.messageCreated);
                return Object.assign({}, prev, {
                  allMessages: [...prev.allMessages, subscriptionData.data.messageCreated].slice(0, 200),
                });
              },
            });
            return (
              <StyledChat>
                <MessageList allMessages={allMessages} subscribeToMore={more} />
                <InputText />
              </StyledChat>);
          }}
        </Query>
      </PageVisibility>
    );
  }
};

export default withMainLayout(Chat);
