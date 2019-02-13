const { gql } = require('apollo-server-express');

const Post = require('../models/Post');
const PostLikes = require('../models/PostLikes');
const PostComment = require('../models/PostComment');
const Followers = require('../models/Followers');
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
    authorFollowed: Boolean
    liked: Boolean
    likes: [User]
    picUrl: String
    caption: String
    comments: Comments
    createdAt: String
  }

  type Posts {
    nodes: [Post]
    pageInfo: PageInfo
  }

  type Profile {
    followersCount: Int
    followingCount: Int
    postsCount: Int
    posts: Posts
    user: User
  }

  type User {
    _id: String
    username: String
    profilePic: String
    followers: [User]
    following: [User]
  }

  type PageInfo {
    lastCursor: String
    hasNextPage: Boolean!
  }

  type Query {
    comments (postId: String!): Comments
    post (_id: String!): Post
    posts (startingDate: String, amount: Int, username: String): Posts
    profile (username: String!): Profile
    profilePosts (_id: String!): [Post]
  }

  type Mutation {
    createPost (author: String!, caption: String!, picUrl: String!): Post
    commentPost (postId: String!, author: String!, comment: String!): Comment
    editPost (_id: String!, caption: String!): Post
    likePost (postId: String!): User
    unlikePost (postId: String!): User
    followUser (userToFollow: String!): User
    unfollowUser (userToUnfollow: String!): User
  }
`;

const resolvers = {
  Query: {
    comments: async (_, { postId }) => {
      const nodes = await PostComment.findByPost({ postId });
      return { nodes };
    },
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
  Mutation: {
    createPost: async (_, { author, caption, picUrl }) => {
      const post = await Post.createPost({ author, caption, picUrl });
      return post;
    },
    editPost: async (_, { _id, caption }) => {
      const post = await Post.editPost({ _id, caption });
      return post;
    },
    commentPost: async (_, { postId, author, comment }) => {
      const newComment = await PostComment.addNew({ postId, author, comment });
      return newComment;
    },
    likePost: async (_, { postId }, { user }) => {
      const author = user._id;
      if (!author) throw new Error('User not logged in');

      try {
        await PostLikes.addLike({ postId, user: author });
        return { _id: author };
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    unlikePost: async (_, { postId }, { user }) => {
      const author = user._id;
      if (!author) throw new Error('User not logged in');

      try {
        await PostLikes.removeLike({ postId, user: author });
        return { _id: author };
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    followUser: async (_, { userToFollow }, { user }) => {
      const author = user._id;
      if (!author) throw new Error('User not logged in');

      // @todo: ensure that both operations were successful, if 1 was and other not, revert the one that was
      const addFollower = Followers.addFollower({ owner: userToFollow, newFollower: author });
      const addFollowing = Following.addFollowing({ owner: author, userToFollow });

      try {
        await Promise.all([addFollower, addFollowing]);
        return { _id: userToFollow };
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    unfollowUser: async (_, { userToUnfollow }, { user }) => {
      const author = user._id;
      if (!author) throw new Error('User not logged in');

      // @todo: ensure that both operations were successful, if 1 was and other not, revert the one that was
      const removeFollower = Followers.removeFollower({ owner: userToUnfollow, followerToRemove: author });
      const removeFollowing = Following.removeFollowing({ owner: author, userToUnfollow });

      try {
        await Promise.all([removeFollower, removeFollowing]);
        return { _id: userToUnfollow };
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  },
  Post: {
    comments: async ({ _id }) => {
      const nodes = await PostComment.findByPost({ postId: _id });
      return { nodes };
    },
    likes: async ({ _id }) => PostLikes.findByPost({ postId: _id }),
    liked: async ({ _id }, _, context) => PostLikes.isPostLiked({ _id, author: context.user && context.user._id }),
    authorFollowed: async ({ author }, _, context) => console.log(context) || Followers.isFollowedBy({
      owner: author._id,
      followedBy: context.user && context.user._id,
    }),
  },
  Profile: {
    followersCount: async ({ user }) => Followers.countFollowers({ owner: user._id }),
    followingCount: async ({ user }) => Following.countFollowing({ owner: user._id }),
    postsCount: async ({ user }) => Post.countDocuments({ author: user._id }),
    posts: async ({ user }) => Post.getByAuthor({ author: user._id }),
  },
  User: {
    followers: async ({ _id }) => Followers.findByUserId({ owner: _id }),
    following: async ({ _id }) => Following.findByUserId({ owner: _id }),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
