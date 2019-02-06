const mongoose = require('mongoose');

module.exports = {
  connect: () => {
    const dbURI = 'mongodb://divinaapp:k6gbTKbThhKrD5b1@ds059692.mlab.com:59692/divina-app';
    // @todo: set a production config for mongoose connection
    mongoose.connect(dbURI, {
      useCreateIndex: true,
      useNewUrlParser: true,
    });

    const { connection } = mongoose;

    connection.on('connected', () => {
      console.log('Mongoose default connection is open');
    });

    connection.on('error', (err) => {
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
