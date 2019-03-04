const { gql } = require('apollo-server-express');

const Post = require('../models/Post');
const User = require('../models/User');
const Following = require('../models/Following');
const Followers = require('../models/Followers');

const { missing } = require('../util');

const typeDefs = gql`
  extend type Query {
    profile (username: String): Profile
    profilePosts (_id: String!): [Post]
  }

  extend type Mutation {
    editUserDescription (description: String!): User
  }

  type Profile {
    authorFollowed: FollowingStatus
    followersCount: Int
    followingCount: Int
    postsCount: Int
    posts: Posts
    user: User
  }
`;

const resolvers = {
  Query: {
    profile: async (_, { username }, { loggedUser }) => {
      let findBy = username;
      if (!username) findBy = loggedUser.username;

      const user = await User.findByUsername(findBy);
      return user ? { user } : null;
    },
    profilePosts: async (_, { _id }) => {
      const { nodes = [] } = await Post.getByAuthor({ author: _id });
      return nodes;
    },
  },
  Mutation: {
    editUserDescription: async (_, { description }, { loggedUser = missing('needLogin') }) => {
      const user = await User.editDescription({ _id: loggedUser._id, description });
      return user;
    },
  },
  Profile: {
    authorFollowed: async ({ user }, _, { loggedUser }) => (loggedUser
      ? {
        _id: user._id,
        isFollowing: await Followers.isFollowedBy({
          owner: user._id,
          followedBy: loggedUser && loggedUser._id,
        }),
      }
      : { _id: user._id, isFollowing: false }
    ),
    followersCount: async ({ user }) => Followers.countFollowers({ owner: user._id }),
    followingCount: async ({ user }) => Following.countFollowing({ owner: user._id }),
    postsCount: async ({ user }) => Post.countDocuments({ author: user._id }),
    posts: async ({ user }) => Post.getByAuthor({ author: user._id }),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
