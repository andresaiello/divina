import gql from 'graphql-tag';

import * as User from './User';

export const Queries = {
  GET_POSTS: gql`
    query PROFILE_GET_POSTS($_id: String!) {
      profilePosts(_id: $_id) {
        _id
        picUrl
      }
    }
  `,
  GET_FOLLOWERS: gql`
    query PROFILE_GET_FOLLOWERS($username: String!) {
      profile(username: $username) {
        user {
          _id
          followers {
            _id
            username
            profilePic
            followedByLoggedUser {
              ...UserFollowingStatus
            }
          }
        }
      }
    }
    ${User.Fragments.FollowingStatus}
  `,
  GET_FOLLOWING: gql`
    query PROFILE_GET_FOLLOWING($username: String!) {
      profile(username: $username) {
        user {
          _id
          following {
            _id
            username
            profilePic
            followedByLoggedUser {
              ...UserFollowingStatus
            }
          }
        }
      }
    }
    ${User.Fragments.FollowingStatus}
  `,
};
