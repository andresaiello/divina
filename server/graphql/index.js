const { gql } = require('apollo-server-express');
const { merge } = require('lodash');

const Chat = require('./Chat.graphql');
const Post = require('./Post.graphql');
const Profile = require('./Profile.graphql');
const User = require('./User.graphql');

const Brand = require('../models/Brand');

const Query = gql`
  type Query {
    _empty: String
    brands: Brands
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const Subscription = gql`
  type Subscription {
    _empty: String
  }
`;

const rest = gql`
  enum Currency {
    EUR
  }

  type PageInfo {
    lastCursor: String
    hasNextPage: Boolean!
  }

  type Brand {
    _id: String
    name: String
    website: String
  }

  type Brands {
    nodes: [Brand]
  }
`;

const resolvers = {
  Query: {
    brands: async () => ({ nodes: await Brand.find() }),
  },
};

module.exports = {
  typeDefs: [
    Query,
    Mutation,
    Subscription,
    Chat.typeDefs,
    Post.typeDefs,
    Profile.typeDefs,
    User.typeDefs,
    rest,
  ],
  resolvers: merge(resolvers, Chat.resolvers, Post.resolvers, Profile.resolvers, User.resolvers),
};
