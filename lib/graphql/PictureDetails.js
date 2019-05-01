import gql from 'graphql-tag';

import * as Post from './Post';

export const Queries = {
  GET_DETAILS: gql`
    query PICTURE_DETAILS_GET_DETAILS($_id: String!) {
      post(_id: $_id) {
        author {
          _id
          username
          profilePic
        }
        dots {
          ...PostDots
        }
        likes {
          ...PostLikes
        }
        liked {
          ...PostIsLiked
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
    ${Post.Fragments.Dots}
    ${Post.Fragments.Likes}
    ${Post.Fragments.IsLiked}
  `,
};
