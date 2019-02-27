const { gql } = require('apollo-server-express');

const Post = require('../models/Post');
const PostLikes = require('../models/PostLikes');
const PostComment = require('../models/PostComment');
const Followers = require('../models/Followers');
const Following = require('../models/Following');
const User = require('../models/User');

const { missing } = require('../util');

const typeDefs = gql`
  type Comment {
    _id: String
    author: User
    content: String
    post: String
    createdAt: String
  }

  type Comments {
    _id: String
    nodes: [Comment]
  }

  type Like {
    _id: String
    author: User
  }

  type Likes {
    _id: String
    nodes: [Like]
  }

  type LikeStatus {
    _id: String
    isLiked: Boolean
  }

  enum Currency {
    EUR
  }

  type Dot {
    _id: String
    xPosition: Float
    yPosition: Float
    title: String
    brand: String
    price: Int
    currency: Currency
  }

  type Dots {
    _id: String
    nodes: [Dot]
  }

  type Post {
    _id: String
    author: User
    authorFollowed: FollowingStatus
    caption: String
    comments: Comments
    createdAt: String
    dots: Dots
    liked: LikeStatus
    likes: Likes
    picUrl: String
  }

  type Posts {
    nodes: [Post]
    pageInfo: PageInfo
  }

  type FollowingStatus {
    _id: String
    isFollowing: Boolean
  }

  type Profile {
    authorFollowed: FollowingStatus
    followersCount: Int
    followingCount: Int
    postsCount: Int
    posts: Posts
    user: User
  }

  type User {
    _id: String
    username: String
    description: String
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
    profile (username: String): Profile
    profilePosts (_id: String!): [Post]
  }

  type Mutation {
    addDot (
      postId: String!, xPosition: Float!, yPosition: Float!, title: String!, brand: String!, price: Int!, currency: String!
    ): Post
    createPost (author: String!, caption: String!, picUrl: String!, picId: String!): Post
    commentPost (postId: String!, author: String!, comment: String!): Comments
    editUserDescription (description: String!): User
    editPost (_id: String!, caption: String!): Post
    likePost (postId: String!): LikeStatus
    unlikePost (postId: String!): LikeStatus
    followUser (userToFollow: String!): FollowingStatus
    unfollowUser (userToUnfollow: String!): FollowingStatus
  }
`;

const resolvers = {
  Query: {
    comments: async (_, { postId }) => {
      const nodes = await PostComment.findByPost({ postId });
      return { _id: postId, nodes };
    },
    post: async (_, { _id }) => Post.getById(_id),
    posts: async (_, args) => {
      const { nodes, lastCursor, hasNextPage } = await Post.getFeedPosts(args);
      return { nodes, pageInfo: { lastCursor, hasNextPage } };
    },
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
    addDot: async (_, { postId, ...dot }, { loggedUser = missing('needLogin') }) => {
      const { _id, author } = await Post.getById(postId);
      const authorId = author._id && author._id.toString();
      const loggedUserId = loggedUser._id && loggedUser._id.toString();
      if (!loggedUserId) throw new Error('Authentication needed');
      if (authorId !== loggedUserId) throw new Error('Post author and logged user don\'t match');

      return Post.addDot({ _id, dot });
    },
    // @todo: set authorization for this mutation
    createPost: async (_, {
      author, caption, picUrl, picId,
    }) => {
      const post = await Post.createPost({
        author, caption, picUrl, picId,
      });

      return post;
    },
    // @todo: set authorization for this mutation
    editPost: async (_, { _id, caption }) => {
      const post = await Post.editPost({ _id, caption });
      return post;
    },
    editUserDescription: async (_, { description }, { loggedUser = missing('needLogin') }) => {
      const user = await User.editDescription({ _id: loggedUser._id, description });
      return user;
    },
    // @todo: set authorization for this mutation
    commentPost: async (_, { postId, author, comment }) => {
      await PostComment.addNew({ postId, author, comment });
      const nodes = await PostComment.findByPost({ postId });
      return { _id: postId, nodes };
    },
    likePost: async (_, { postId }, { loggedUser = missing('needLogin') }) => {
      const author = loggedUser._id;

      try {
        await PostLikes.addLike({ postId, user: author });
        return { _id: postId, isLiked: true };
      } catch (e) {
        console.log(e);
        return { _id: postId, isLiked: false };
      }
    },
    unlikePost: async (_, { postId }, { loggedUser = missing('needLogin') }) => {
      const author = loggedUser._id;

      try {
        await PostLikes.removeLike({ postId, user: author });
        return { _id: postId, isLiked: false };
      } catch (e) {
        console.log(e);
        return { _id: postId, isLiked: true };
      }
    },
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
  },
  Post: {
    comments: async ({ _id }) => {
      const nodes = await PostComment.findByPost({ postId: _id });
      return { _id, nodes };
    },
    dots: async (nonFormattedPost) => {
      const { _id, dots } = nonFormattedPost;

      return { _id, nodes: dots || [] };
    },
    likes: async ({ _id }) => PostLikes.findByPost({ postId: _id }),
    liked: async ({ _id }, _, { loggedUser = missing('needLogin') }) => ({
      _id,
      isLiked: await PostLikes.isPostLiked({ _id, author: loggedUser._id }),
    }),
    authorFollowed: async ({ author }, _, { loggedUser }) => (loggedUser
      ? {
        _id: author._id,
        isFollowing: await Followers.isFollowedBy({
          owner: author._id,
          followedBy: loggedUser && loggedUser._id,
        }),
      }
      : { _id: author._id, isFollowing: false }
    ),
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
  User: {
    followers: async ({ _id }) => Followers.findByUserId({ owner: _id }),
    following: async ({ _id }) => Following.findByUserId({ owner: _id }),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
