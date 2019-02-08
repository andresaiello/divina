import gql from 'graphql-tag';

export const CREATE_POST = gql`
  mutation CREATE_POST ($author: String, $picUrl: String) {
    createPost (author: $author, picUrl: $picUrl) {
        _id
        picUrl
    }
  }
`;

export const FEED_GET_POSTS = gql`
  query FEED_GET_POSTS ($startingDate: String, $amount: Int) {
    posts (startingDate: $startingDate, amount: $amount) {
      nodes {
        _id
        picUrl
        author {
          username
          profilePic
        }
        createdAt
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
      pageInfo {
        lastCursor
        hasNextPage
      }
    }
  }
`;

export const PROFILE_GET_POSTS = gql`
  query PROFILE_GET_POSTS ($_id: String!) {
    profilePosts (_id: $_id) {
      _id
      picUrl
    }
  }
`;

export const PICTURE_DETAILS_GET_DETAILS = gql`
  query PICTURE_DETAILS_GET_DETAILS ($_id: String!) {
    post (_id: $_id) {
      author {
        username
        profilePic
      }
      picUrl
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
`;

export const GET_USER_PROFILE = gql`
  query GET_USER_PROFILE ($username: String!) {
    profile (username: $username) {
      user {
        _id
        username
        profilePic
      }
      postsCount
    }
  }
`;
