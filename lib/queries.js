import gql from 'graphql-tag';

export const GET_POSTS = gql`
  query GET_POSTS {
    posts {
      id
      picUrl
    }
  }
`;
