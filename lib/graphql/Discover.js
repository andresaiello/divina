import gql from 'graphql-tag';

export const Queries = {
  GET_POSTS: gql`
    query FEED_GET_POSTS ($startingDate: String, $amount: Int) {
      posts (startingDate: $startingDate, amount: $amount) {
        nodes {
          _id
          picUrl
          caption
          createdAt
          author {
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
