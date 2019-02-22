const { gql } = require('apollo-server-express');
const { PubSub, withFilter } = require('apollo-server-express');

const menssages = [];

const pubsub = new PubSub();

const Post = require('../models/Post');
const PostLikes = require('../models/PostLikes');
const PostComment = require('../models/PostComment');
const Followers = require('../models/Followers');
const Following = require('../models/Following');
const User = require('../models/User');
const ChatGroup = require('../models/ChatGroup');
const ChatMessage = require('../models/ChatMessage');


const { missing } = require('../util');

const MESSAGE_CREATED = 'MESSAGE_CREATED';

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
    description: String
    profilePic: String
    followers: [User]
    following: [User]
  }

  type PageInfo {
    lastCursor: String
    hasNextPage: Boolean!
  }


  type ChatMessage {
    _id: String
    author: User
    content: String
    chatGroup: String
    createdAt: String
  }

  type ChatMessages {
    nodes: [ChatMessage]
  }

  type ChatGroup {
    _id: String
    author: User
    picUrl: [String]
    caption: String
    chatMessages: ChatMessages
    createdAt: String
    updatedAt: String
  }

  type ChatGroups {
    nodes: [ChatGroup]
    pageInfo: PageInfo
  }


  type Message {
    id: Int!,
    from: String!,
    text: String!,
    isFavorite: Boolean!
  }

  type Subscription {
    messageCreated: Message
    messageUpdated(id: Int!): Message
  }




  type Query {
    comments (postId: String!): Comments
    post (_id: String!): Post
    posts (startingDate: String, amount: Int, username: String): Posts
    profile (username: String): Profile
    profilePosts (_id: String!): [Post]

    chatGroup (_id: String!): ChatGroup
    chatGroups (amount: Int, member: String): ChatGroups

    allMessages: [Message]
  }

  type Mutation {
    createPost (author: String!, caption: String!, picUrl: String!): Post
    commentPost (postId: String!, author: String!, comment: String!): Comment
    editUserDescription (description: String!): User
    editPost (_id: String!, caption: String!): Post
    likePost (postId: String!): User
    unlikePost (postId: String!): User
    followUser (userToFollow: String!): User
    unfollowUser (userToUnfollow: String!): User

    createChatGroup (author: String!, caption: String!, picUrl: [String!], members: [String!]): ChatGroup
    
    createMessage (text: String!): Message
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

    chatGroup: async (_, { _id }) => ChatGroup.getById(_id) || null,
    chatGroups: async (_, args) => {
      const { nodes, lastCursor, hasNextPage } = await ChatGroup.getChatGroups(args);
      return { nodes, pageInfo: { lastCursor, hasNextPage } };
    },


    allMessages () {
      return menssages;
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
    editUserDescription: async (_, { description }, { loggedUser = missing('needLogin') }) => {
      const user = await User.editDescription({ _id: loggedUser._id, description });
      return user;
    },
    commentPost: async (_, { postId, author, comment }) => {
      const newComment = await PostComment.addNew({ postId, author, comment });
      return newComment;
    },
    likePost: async (_, { postId }, { loggedUser = missing('needLogin') }) => {
      const author = loggedUser._id;

      try {
        await PostLikes.addLike({ postId, user: author });
        return { _id: author };
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    unlikePost: async (_, { postId }, { loggedUser = missing('needLogin') }) => {
      const author = loggedUser._id;

      try {
        await PostLikes.removeLike({ postId, user: author });
        return { _id: author };
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    followUser: async (_, { userToFollow }, { loggedUser = missing('needLogin') }) => {
      const author = loggedUser._id;

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
    unfollowUser: async (_, { userToUnfollow }, { loggedUser = missing('needLogin') }) => {
      const author = loggedUser._id;

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

    createChatGroup: async (_, {
      author, caption, picUrl, members,
    }) => {
      const chatGroup = await ChatGroup.createChatGroup({
        author, caption, picUrl, members,
      });
      return chatGroup;
    },


    createMessage: async (_, { text }, { loggedUser = missing('needLogin') }) => {
      const author = loggedUser._id;
      console.log(loggedUser);

      const message = { id: menssages.length + 1, from: 'andy', text };
      menssages.push(message);
      await pubsub.publish(MESSAGE_CREATED, { messageCreated: message });
      return message;
    },
  },

  Subscription: {
    messageCreated: {
      subscribe: () => pubsub.asyncIterator([MESSAGE_CREATED]),
    },
  },

  Post: {
    comments: async ({ _id }) => {
      const nodes = await PostComment.findByPost({ postId: _id });
      return { nodes };
    },
    likes: async ({ _id }) => PostLikes.findByPost({ postId: _id }),
    liked: async ({ _id }, _, { loggedUser = missing('needLogin') }) => (
      PostLikes.isPostLiked({ _id, author: loggedUser._id })
    ),
    authorFollowed: async ({ author }, _, { loggedUser = missing('needLogin') }) => Followers.isFollowedBy({
      owner: author._id,
      followedBy: loggedUser && loggedUser._id,
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
