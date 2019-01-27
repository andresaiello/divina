import gql from 'graphql-tag';

export const FEED_GET_POSTS = gql`
  query FEED_GET_POSTS ($startingDate: String, $amount: Int) {
    posts (startingDate: $startingDate, amount: $amount) {
      nodes {
        id
        picUrl
        timestamp
      }
      pageInfo {
        lastCursor
        hasNextPage
      }
    }
  }
`;

export const PROFILE_GET_POSTS = gql`
  query PROFILE_GET_POSTS ($username: String) {
    posts (username: $username) {
      nodes {
        id
        picUrl
        timestamp
      }
      pageInfo {
        lastCursor
        hasNextPage
      }
    }
  }
`;
