const { gql } = require('apollo-server-express');

const Following = require('../models/Following');
const Followers = require('../models/Followers');
const User = require('../models/User');

const { missing } = require('../util');

const typeDefs = gql`
  extend type Mutation {
    followUser (userToFollow: String!): FollowingStatus
    unfollowUser (userToUnfollow: String!): FollowingStatus
    editProfile (description: String!, website: String!, instagram: String!): User
    updateProfilePic (newUrl: String!): User
  }

  type FollowingStatus {
    _id: String
    isFollowing: Boolean
  }

  type User {
    _id: String
    name: String
    followedByLoggedUser: FollowingStatus
    username: String
    description: String
    website: String
    instagram: String
    profilePic: String
    followers: [User]
    following: [User]
  }
`;

const resolvers = {
  Query: {},
  Mutation: {
    followUser: async (_, { userToFollow }, { loggedUser = missing('needLogin') }) => {
      const author = loggedUser._id;

      // @todo: ensure that both operations were successful, if 1 was and other not, revert the one that was
      const addFollower = Followers.addFollower({ owner: userToFollow, newFollower: author });
      const addFollowing = Following.addFollowing({ owner: author, userToFollow });

      try {
        await Promise.all([addFollower, addFollowing]);
        return { _id: userToFollow, isFollowing: true };
      } catch (e) {
        console.log(e);
        return { _id: userToFollow, isFollowing: false };
      }
    },
    unfollowUser: async (_, { userToUnfollow }, { loggedUser = missing('needLogin') }) => {
      const author = loggedUser._id;

      // @todo: ensure that both operations were successful, if 1 was and other not, revert the one that was
      const removeFollower = Followers.removeFollower({ owner: userToUnfollow, followerToRemove: author });
      const removeFollowing = Following.removeFollowing({ owner: author, userToUnfollow });

      try {
        await Promise.all([removeFollower, removeFollowing]);
        return { _id: userToUnfollow, isFollowing: false };
      } catch (e) {
        console.log(e);
        return { _id: userToUnfollow, isFollowing: true };
      }
    },
    editProfile: async (_, profileInfo, { loggedUser = missing('needLogin') }) => User.editProfile({
      _id: loggedUser._id,
      profileInfo,
    }),
    updateProfilePic: async (_, { newUrl }, { loggedUser = missing('needLogin') }) => User.updateProfilePic({
      _id: loggedUser._id,
      newUrl,
    }),
  },
  User: {
    followedByLoggedUser: async ({ _id }, _, { loggedUser }) => (loggedUser
      ? {
        _id,
        isFollowing: await Followers.isFollowedBy({
          owner: _id,
          followedBy: loggedUser && loggedUser._id,
        }),
      }
      : { _id, isFollowing: false }
    ),
    followers: async ({ _id }) => Followers.findByUserId({ owner: _id }),
    following: async ({ _id }) => Following.findByUserId({ owner: _id }),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
