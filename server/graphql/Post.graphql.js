const { gql } = require('apollo-server-express');

const Post = require('../models/Post');
const PostComment = require('../models/PostComment');
const PostLikes = require('../models/PostLikes');
const Followers = require('../models/Followers');
const Brand = require('../models/Brand');

const { missing, checkOwnership } = require('../util');

const typeDefs = gql`
  extend type Query {
    comments(postId: String!): Comments
    post(_id: String!): Post
    posts(startingDate: String, amount: Int, username: String, clothingStyles: [String]): Posts
  }

  extend type Mutation {
    setClothingStyles(postId: String!, clothingStyles: [String]!): Post
    addDot(
      postId: String!
      xPosition: Float!
      yPosition: Float!
      title: String!
      brand: String!
      price: Int!
      currency: String!
      color: String!
    ): Post
    deleteDot(postId: String!, dotId: String!): Post
    createPost(author: String!, caption: String!, picUrl: String!, picId: String!): Post
    commentPost(postId: String!, author: String!, comment: String!): Comments
    editPost(_id: String!, caption: String!): Post
    deletePost(_id: String!): Post
    likePost(postId: String!): LikeStatus
    reportPost(postId: String!): Post
    unlikePost(postId: String!): LikeStatus
  }

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

  type Likes {
    _id: String
    nodes: [User]
  }

  type LikeStatus {
    _id: String
    isLiked: Boolean
  }

  type Dot {
    _id: String
    xPosition: Float
    yPosition: Float
    title: String
    brand: Brand
    price: Int
    color: String
    currency: Currency
  }

  type Dots {
    _id: String
    nodes: [Dot]
  }

  type ClothingStyle {
    name: String
  }

  type ClothingStyles {
    _id: String
    nodes: [ClothingStyle]
  }

  type Post {
    _id: String
    author: User
    authorFollowed: FollowingStatus
    caption: String
    comments: Comments
    createdAt: String
    dots: Dots
    clothingStyles: ClothingStyles
    liked: LikeStatus
    likes: Likes
    picUrl: String
  }

  type Posts {
    nodes: [Post]
    pageInfo: PageInfo
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
      const { nodes, lastCursor, hasNextPage } = await Post.getPaginatedPosts(args);
      return { nodes, pageInfo: { lastCursor, hasNextPage } };
    },
  },
  Mutation: {
    setClothingStyles: async (
      _,
      { postId, clothingStyles },
      { loggedUser = missing('needLogin') },
    ) => {
      const { _id, author } = await Post.getById(postId);
      checkOwnership(loggedUser, author);

      return Post.setClothingStyles({ _id, clothingStyles });
    },
    addDot: async (_, { postId, ...dot }, { loggedUser = missing('needLogin') }) => {
      const { _id, author } = await Post.getById(postId);
      checkOwnership(loggedUser, author);

      return Post.addDot({ _id, dot });
    },
    deleteDot: async (_, { postId, dotId }, { loggedUser = missing('needLogin') }) => {
      const { author } = await Post.getById(postId);
      checkOwnership(loggedUser, author);

      return Post.deleteDot({ postId, dotId });
    },
    reportPost: async (_, { postId }, { loggedUser = missing('needLogin') }) =>
      Post.report({
        postId,
        reporterId: loggedUser._id,
      }),
    createPost: async (_, { caption, picUrl, picId }, { loggedUser = missing('needLogin') }) =>
      Post.createPost({
        author: loggedUser._id,
        caption,
        picUrl,
        picId,
      }),
    editPost: async (_, { _id, caption }, { loggedUser = missing('needLogin') }) => {
      const { author } = await Post.getById(_id);
      checkOwnership(loggedUser, author);

      return Post.editPost({ _id, caption });
    },
    deletePost: async (_, { _id }, { loggedUser = missing('needLogin') }) => {
      const { author } = await Post.getById(_id);
      checkOwnership(loggedUser, author);

      return Post.deletePost({ _id });
    },
    commentPost: async (_, { postId, comment }, { loggedUser = missing('needLogin') }) => {
      await PostComment.addNew({ postId, author: loggedUser._id, comment });
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
  },
  Post: {
    comments: async ({ _id }) => {
      const nodes = await PostComment.findByPost({ postId: _id });
      return { _id, nodes };
    },
    clothingStyles: async nonFormattedPost => {
      const { _id, clothingStyles } = nonFormattedPost;

      const nodes =
        clothingStyles && clothingStyles.length ? clothingStyles.map(cs => ({ name: cs })) : [];

      return { _id, nodes };
    },
    dots: async nonFormattedPost => {
      const { _id, dots } = nonFormattedPost;

      return { _id, nodes: dots || [] };
    },
    likes: async ({ _id }) => ({
      _id,
      nodes: await PostLikes.findByPost({ _id }),
    }),
    liked: async ({ _id }, _, { loggedUser }) =>
      loggedUser && loggedUser._id
        ? {
            _id,
            isLiked: await PostLikes.isPostLiked({ _id, author: loggedUser._id }),
          }
        : { _id: null, isLiked: false },
    authorFollowed: async ({ author }, _, { loggedUser }) =>
      loggedUser && loggedUser._id
        ? {
            _id: author._id,
            isFollowing: await Followers.isFollowedBy({
              owner: author._id,
              followedBy: loggedUser && loggedUser._id,
            }),
          }
        : { _id: author._id, isFollowing: false },
  },
  Dot: {
    brand: async ({ brand }) => Brand.getById(brand),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
