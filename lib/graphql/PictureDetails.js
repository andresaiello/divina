import gql from 'graphql-tag';

export const Queries = {
  GET_DETAILS: gql`
    query PICTURE_DETAILS_GET_DETAILS ($_id: String!) {
      post (_id: $_id) {
        author {
          username
          profilePic
        }
        picUrl
        caption
        comments {
          nodes {
            _id
            author {
              username
              profilePic
            }
            content
            createdAt
          }
        }
      }
    }
  `,
};
