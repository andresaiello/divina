const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true }, // @todo: check how well mongoose unique works (probably not much)
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

userSchema.statics.createFromGmailLogin = function createFromGmailLogin ({ _json: gmailData }) {
  return this
    .create({
      username: gmailData.nickname || parseInt(Math.random() * 9999999999, 10), // @todo: create better random usernames
      profilePic: gmailData.picture || null,
      name: gmailData.name || null,
    });
};

let User;

try {
  User = mongoose.model('User');
} catch (e) {
  User = mongoose.model('User', userSchema);
}

module.exports = User;
