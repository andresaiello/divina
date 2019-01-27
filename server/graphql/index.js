const { gql } = require('apollo-server-express');

const promiseTimeout = ms => new Promise(resolve => setTimeout(resolve, ms));

const typeDefs = gql`
  type Post {
    id: Int
    picUrl: String
    timestamp: String
  }

  type PageInfo {
    lastCursor: String
    hasNextPage: Boolean!
  }

  type Posts {
    nodes: [Post]
    pageInfo: PageInfo
  }

  type Query {
    posts (startingDate: String, amount: Int): Posts
  }
`;

const resolvers = {
  Query: {
    posts: async (_, args) => {
      await promiseTimeout(3000);
      const posts = [
        {
          id: 6,
          picUrl: 'https://source.unsplash.com/random',
          timestamp: '1548551238847',
        },
        {
          id: 5,
          picUrl: 'https://source.unsplash.com/random',
          timestamp: '1548551238846',
        },
        {
          id: 4,
          picUrl: 'https://source.unsplash.com/random',
          timestamp: '1548551238845',
        },
        {
          id: 3,
          picUrl: 'https://source.unsplash.com/random',
          timestamp: '1548551238844',
        },
        {
          id: 2,
          picUrl: 'https://source.unsplash.com/random',
          timestamp: '1548551238843',
        },
        {
          id: 1,
          picUrl: 'https://source.unsplash.com/random',
          timestamp: '1548551238842',
        },
      ];

      const { startingDate = Date.now(), amount = 0 } = args || {};

      const nodes = posts
        .filter(post => parseInt(post.timestamp, 10) < parseInt(startingDate, 10))
        .slice(0, amount === 0 ? posts.length : amount);

      return {
        nodes,
        pageInfo: {
          lastCursor: (nodes[nodes.length - 1] && nodes[nodes.length - 1].timestamp) || null,
          // temporary way of knowing if there is a next page @todo: make it real
          hasNextPage: nodes.length > 0 ? nodes[nodes.length - 1].timestamp !== '1548551238842' : false,
        },
      };
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
