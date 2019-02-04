const { gql } = require('apollo-server-express');

const Post = require('../models/Post');
const PostComment = require('../models/PostComment');
const Followed = require('../models/Followed');
const Following = require('../models/Following');
const User = require('../models/User');

const typeDefs = gql`
  type Comment {
    _id: String
    author: User
    content: String
    post: String
    createdAt: String
  }

  type Comments {
    nodes: [Comment]
  }

  type Post {
    _id: String
    author: User
    picUrl: String
    comments: Comments
    createdAt: String
  }

  type Posts {
    nodes: [Post]
    pageInfo: PageInfo
  }

  type Profile {
    user: User
    postsCount: Int
    posts: Posts
  }

  type User {
    _id: String
    username: String
    profilePic: String
    followed: [User]
    following: [User]
  }

  type PageInfo {
    lastCursor: String
    hasNextPage: Boolean!
  }

  type Query {
    comments (postId: String): Comments
    post (_id: String!): Post
    posts (startingDate: String, amount: Int, username: String): Posts
    profile (username: String!): Profile
    profilePosts (_id: String!): [Post]
  }
`;

const resolvers = {
  Query: {
    post: async (_, { _id }) => Post.getById(_id) || null,
    posts: async (_, args) => {
      const { nodes, lastCursor, hasNextPage } = await Post.getFeedPosts(args);
      return { nodes, pageInfo: { lastCursor, hasNextPage } };
    },
    profile: async (_, { username }) => {
      const user = await User.findByUsername(username);
      return user ? { user } : null;
    },
    profilePosts: async (_, { _id }) => {
      const { nodes = [] } = await Post.getByAuthor({ author: _id });
      return nodes;
    },
  },
  Post: {
    comments: async ({ _id }) => {
      const nodes = await PostComment.findByPost({ postId: _id });
      return { nodes };
    },
  },
  Profile: {
    postsCount: async ({ user }) => Post.countDocuments({ author: user._id }),
    posts: async ({ user }) => Post.getByAuthor({ author: user._id }),
  },
  User: {
    followed: async ({ _id }) => {
      const nodes = await Followed.findByUserId({ owner: _id });
      return { nodes };
    },
    following: async ({ _id }) => {
      const nodes = await Following.findByUserId({ owner: _id });
      return { nodes };
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
