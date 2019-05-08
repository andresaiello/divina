import gql from 'graphql-tag';

import * as User from './User';
import * as Post from './Post';

export const Queries = {
  GET_POSTS: gql`
    query FEED_GET_POSTS($startingDate: String, $amount: Int) {
      posts(startingDate: $startingDate, amount: $amount) {
        nodes {
          _id
          picUrl
          liked {
            ...PostIsLiked
          }
          authorFollowed {
            ...UserFollowingStatus
          }
          dots {
            ...PostDots
          }
          caption
          author {
            _id
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
    ${User.Fragments.FollowingStatus}
    ${Post.Fragments.IsLiked}
    ${Post.Fragments.Dots}
  `,
};
