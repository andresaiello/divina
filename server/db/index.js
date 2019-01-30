const mongoose = require('mongoose');

module.exports = {
  connect: () => {
    const dbURI = 'mongodb://divinaapp:k6gbTKbThhKrD5b1@ds059692.mlab.com:59692/divina-app';
    // @todo: set a production config for mongoose connection
    mongoose.connect(dbURI, { useNewUrlParser: true });
  },
};
