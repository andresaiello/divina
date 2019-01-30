import gql from 'graphql-tag';

export const FEED_GET_POSTS = gql`
  query FEED_GET_POSTS ($startingDate: String, $amount: Int) {
    posts (startingDate: $startingDate, amount: $amount) {
      nodes {
        _id
        picUrl
        createdAt
        comments {
          nodes {
            _id
            author
            content
            createdAt
          }
        }
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
        _id
        picUrl
        createdAt
      }
      pageInfo {
        lastCursor
        hasNextPage
      }
    }
  }
`;
