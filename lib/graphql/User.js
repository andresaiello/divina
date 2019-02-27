import gql from 'graphql-tag';

export const Fragments = {
  FollowingStatus: gql`
    fragment UserFollowingStatus on FollowingStatus {
      _id
      isFollowing
    }
  `,
};

export const Queries = {
  GET_PROFILE: gql`
    query GET_USER_PROFILE ($username: String) {
      profile (username: $username) {
        authorFollowed {
          ...UserFollowingStatus
        }
        user {
          _id
          description
          username
          profilePic
        }
        postsCount
        followersCount
        followingCount
      }
    }
    ${Fragments.FollowingStatus}
  `,
};

export const Mutations = {
  FOLLOW: gql`
    mutation FOLLOW_USER ($userToFollow: String!) {
      followUser (userToFollow: $userToFollow) {
        ...UserFollowingStatus
      }
    }
    ${Fragments.FollowingStatus}
  `,
  UNFOLLOW: gql`
    mutation UNFOLLOW_USER ($userToUnfollow: String!) {
      unfollowUser (userToUnfollow: $userToUnfollow) {
        ...UserFollowingStatus
      }
    }
    ${Fragments.FollowingStatus}
  `,
};
