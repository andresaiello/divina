const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({

}, { timestamps: true });

let User;

try {
  User = mongoose.model('User');
} catch (e) {
  User = mongoose.model('User', userSchema);
}

module.exports = User;
