const { gql } = require('apollo-server-express');
const Post = require('../models/Post');
const PostComment = require('../models/PostComment');

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

  type User {
    _id: String
    username: String
    profilePic: String
  }

  type PageInfo {
    lastCursor: String
    hasNextPage: Boolean!
  }

  type Query {
    posts (startingDate: String, amount: Int, username: String): Posts
    comments (postId: String): Comments
  }
`;

const resolvers = {
  Query: {
    posts: async (_, args) => {
      const { nodes, lastCursor, hasNextPage } = await Post.getFeedPosts(args);
      return { nodes, pageInfo: { lastCursor, hasNextPage } };
    },
  },
  Post: {
    comments: async ({ _id }) => {
      const nodes = await PostComment.findByPost({ postId: _id });
      return { nodes };
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
