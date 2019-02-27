import gql from 'graphql-tag';

export const CHAT_GET_CHAT_GROUPS = gql`
query CHAT_GET_CHAT_GROUPS($amount: Int, $member: String) {
  chatGroups (amount: $amount, member: $member) {
    nodes{
      _id
      author{
        username
        profilePic
      }
      picUrl
      caption
      createdAt
      updatedAt
    }
  }
}`;


export const CHAT_GET_MESSAGES = gql`
query CHAT_GET_MESSAGES($_id: String!) {
  chatMessages (_id: $_id) {
    nodes{
      _id
      content
      createdAt
      chatGroup
      author{
        username
        profilePic
      }
    }
  }
}
`;

export const CHAT_NEW_MSG = gql`
    mutation addMessageToChatGroup ($chatGroupId: String!, $content: String!) {
    addMessageToChatGroup (chatGroupId: $chatGroupId, content: $content) {
      _id
      content
      createdAt
      chatGroup
      author{
        username
        profilePic
      }
    }
  }`;

export const CHAT_SUB_NEW_MSG = gql`
subscription CHAT_SUB_NEW_MSG($_id: String!) {
 messageCreated(_id: $_id) {
  _id
  content
  createdAt
  chatGroup
  author{
    username
    profilePic
  }
 }
}
`;
