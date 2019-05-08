const mongoose = require('mongoose');
const getConfig = require('../../next.config.js');

const { MONGO_SERVER_URL } = getConfig.serverRuntimeConfig;

module.exports = {
  connect: () => {
    const dbURI = MONGO_SERVER_URL;

    mongoose.set('useFindAndModify', false);

    // @todo: set a production config for mongoose connection
    mongoose.connect(dbURI, {
      useCreateIndex: true,
      useNewUrlParser: true,
    });

    const { connection } = mongoose;

    connection.on('connected', () => {
      console.log('Mongoose default connection is open');
    });

    connection.on('error', err => {
      console.log(`Mongoose default connection has occured ${err} error`);
    });

    connection.on('disconnected', () => {
      console.log('Mongoose default connection is disconnected');
    });

    process.on('SIGINT', () => {
      connection.close(() => {
        console.log('Mongoose default connection is disconnected due to application termination');
        process.exit(0);
      });
    });

    return connection;
  },
};
