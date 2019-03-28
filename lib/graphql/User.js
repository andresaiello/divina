import gql from 'graphql-tag';

export const Fragments = {
  FollowingStatus: gql`
    fragment UserFollowingStatus on FollowingStatus {
      _id
      isFollowing
    }
  `,
  ProfileDetails: gql`
    fragment UserProfileDetails on User {
      _id
      name
      description
      username
      profilePic
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
          ...UserProfileDetails
        }
        postsCount
        followersCount
        followingCount
      }
    }
    ${Fragments.FollowingStatus}
    ${Fragments.ProfileDetails}
  `,
  EDIT_PROFILE_GET_USER_PROFILE: gql`
    query EDIT_PROFILE_GET_USER_PROFILE ($username: String) {
      profile (username: $username) {
        user {
          ...UserProfileDetails
        }
      }
    }
    ${Fragments.ProfileDetails}
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
  EDIT_DESCRIPTION: gql`
    mutation EDIT_DESCRIPTION ($description: String!) {
      editUserDescription (description: $description) {
        ...UserProfileDetails
      }
    }
    ${Fragments.ProfileDetails}
  `,
  UPDATE_PROFILE_PIC: gql`
    mutation UPDATE_PROFILE_PIC ($newUrl: String!) {
      updateProfilePic (newUrl: $newUrl) {
        ...UserProfileDetails
      }
    }
    ${Fragments.ProfileDetails}
  `,
};
