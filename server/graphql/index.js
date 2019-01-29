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
    posts (startingDate: String, amount: Int, username: String): Posts
  }
`;

const resolvers = {
  Query: {
    posts: async (_, args) => {
      await promiseTimeout(3000);

      const posts = [
        {
          id: 6,
          username: '125',
          picUrl: 'https://pbs.twimg.com/profile_images/735023119644102656/QvUKtCA7_400x400.jpg',
          timestamp: '1548551238847',
        },
        {
          id: 5,
          username: '125',
          picUrl: 'https://pbs.twimg.com/profile_images/735733367451222019/6hiGw85q_400x400.jpg',
          timestamp: '1548551238846',
        },
        {
          id: 4,
          username: '125',
          picUrl: 'https://pbs.twimg.com/media/C0wHXtbXUAAyZZN.jpg',
          timestamp: '1548551238845',
        },
        {
          id: 3,
          username: '126',
          picUrl: 'https://pbs.twimg.com/media/C0rn8IAWIAAtKdO.jpg',
          timestamp: '1548551238844',
        },
        {
          id: 2,
          username: '126',
          picUrl: 'https://pbs.twimg.com/media/C0uIwPdWgAAs8r1.jpg',
          timestamp: '1548551238843',
        },
        {
          id: 1,
          username: '126',
          picUrl: 'https://pbs.twimg.com/media/C0uRzE_XAAACyGi.jpg',
          timestamp: '1548551238842',
        },
      ];

      const { startingDate = Date.now(), amount, username } = args || {};

      const nodes = posts
        .filter(post => parseInt(post.timestamp, 10) < parseInt(startingDate, 10))
        .filter(post => (username ? username === post.username : true))
        .slice(0, amount || posts.length);

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
