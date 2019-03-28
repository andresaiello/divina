import gql from 'graphql-tag';

export const Queries = {
  GET_POSTS: gql`
    query DISCOVER_GET_POSTS ($startingDate: String, $amount: Int) {
      posts (startingDate: $startingDate, amount: $amount) {
        nodes {
          _id
          picUrl
          caption
          createdAt
          author {
            _id
            username
          }
        }
        pageInfo {
          lastCursor
          hasNextPage
        }
      }
    }
  `,
};
