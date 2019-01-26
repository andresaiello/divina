const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type post {
    id: Int
    picUrl: String
  }

  type Query {
    posts: [post]
  }
`;

const resolvers = {
  Query: {
    posts: () => ([
      {
        id: Math.round(Math.random() * 10000),
        picUrl: 'https://source.unsplash.com/random',
      },
      {
        id: Math.round(Math.random() * 10000),
        picUrl: 'https://source.unsplash.com/random',
      },
      {
        id: Math.round(Math.random() * 10000),
        picUrl: 'https://source.unsplash.com/random',
      },
      {
        id: Math.round(Math.random() * 10000),
        picUrl: 'https://source.unsplash.com/random',
      },
      {
        id: Math.round(Math.random() * 10000),
        picUrl: 'https://source.unsplash.com/random',
      },
    ]),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
