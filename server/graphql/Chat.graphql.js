const { gql } = require('apollo-server-express');
const { PubSub, withFilter } = require('apollo-server-express');

const pubsub = new PubSub();
const ChatMessage = require('../models/ChatMessage');
const ChatGroup = require('../models/ChatGroup');

const { missing } = require('../util');

const MESSAGE_CREATED = 'MESSAGE_CREATED';

const typeDefs = gql`
  extend type Query {
    chatGroup (_id: String!): ChatGroup
    chatGroups (amount: Int, member: String): ChatGroups
    chatMessages (_id: String!): ChatMessages
  }
  extend type Mutation {
    createChatGroup (author: String!, caption: String!, picUrl: [String!], members: [String!]): ChatGroup
    addMessageToChatGroup (chatGroupId: String!, content: String!): ChatMessage
  }

  extend type Subscription {
    messageCreated (_id: String!): ChatMessage
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
    chatGroup: ChatGroup
  }

  type ChatGroup {
    _id: String
    author: User
    members: [User]
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
`;

const resolvers = {
  Query: {
    chatGroup: async (_, { _id }) => ChatGroup.getById(_id) || null,
    chatGroups: async (_, args, { loggedUser = missing('needLogin') }) => {
      const member = loggedUser._id;
      const { nodes, lastCursor, hasNextPage } = await ChatGroup.getChatGroups({ member });
      return { nodes, pageInfo: { lastCursor, hasNextPage } };
    },
    chatMessages: async (_, { _id }) => {
      const nodes = await ChatMessage.findByChatGroup({ chatGroupId: _id });
      const chatGroup = await ChatGroup.getById(_id);
      return { nodes, chatGroup };
    },
  },
  Mutation: {
    createChatGroup: async (_, {
      author, caption, picUrl, members,
    }, { loggedUser = missing('needLogin') }) => {
      const realAuthor = loggedUser._id;
      const chatGroup = await ChatGroup.createChatGroup({
        author: realAuthor, caption, picUrl, members,
      });
      return chatGroup;
    },
    addMessageToChatGroup: async (_, { chatGroupId, content }, { loggedUser = missing('needLogin') }) => {
      const author = loggedUser._id;
      const newMessage = await ChatMessage.addNew({ chatGroupId, author, content });

      await pubsub.publish(MESSAGE_CREATED, { messageCreated: newMessage });

      return newMessage;
    },
  },
  Subscription: {
    messageCreated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(['MESSAGE_CREATED']),
        (payload, variables) => payload.messageCreated.chatGroup.toString() === variables._id.toString(),
      ),
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
