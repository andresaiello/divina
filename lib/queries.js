import gql from 'graphql-tag';

// @todo create mutations.js
export const CREATE_POST = gql`
  mutation CREATE_POST ($author: String!, $caption: String!, $picUrl: String!) {
    createPost (author: $author, caption: $caption, picUrl: $picUrl) {
      _id
      picUrl
    }
  }
`;

export const EDIT_POST = gql`
  mutation EDIT_POST ($_id: String!, $caption: String!) {
    editPost (_id: $_id, caption: $caption) {
      picUrl
    }
  }
`;

export const COMMENT_POST = gql`
  mutation COMMENT_POST ($postId: String!, $author: String!, $comment: String!) {
    commentPost (postId: $postId, author: $author, comment: $comment) {
      _id
      author {
        username
        profilePic
      }
      content
      createdAt
    }
  }
`;

export const FEED_GET_POSTS = gql`
  query FEED_GET_POSTS ($startingDate: String, $amount: Int) {
    posts (startingDate: $startingDate, amount: $amount) {
      nodes {
        _id
        picUrl
        caption
        author {
          username
          profilePic
        }
        createdAt
      }
      pageInfo {
        lastCursor
        hasNextPage
      }
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query GET_POST_COMMENTS ($postId: String!) {
    comments (postId: $postId){
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
