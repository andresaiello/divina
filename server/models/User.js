const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  profilePic: { type: String }, // @todo set as required and set default profile pic
  name: { type: String },
  email: { type: String },
  birthdate: { type: String },
  gender: { type: String },
  description: { type: String },
  phone: { type: String },
  website: { type: String },
  instagram: { type: String },
}, { timestamps: true });

let User;

try {
  User = mongoose.model('User');
} catch (e) {
  User = mongoose.model('User', userSchema);
}

module.exports = User;
