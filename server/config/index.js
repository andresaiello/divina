module.exports = {
  PORT: process.env.PORT || 3004,
  ENV: process.env.NODE_ENV || 'development',
  GQL_SERVER_URL: process.env.GQL_SERVER_URL || 'http://localhost:3004/graphql',
};
