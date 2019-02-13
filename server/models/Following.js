const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const followingSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  ids: [{ type: Schema.Types.ObjectId, ref: 'User' }], // @todo prevent dupes
}, { timestamps: true });

followingSchema.statics.addFollowing = async function addFollowing ({ owner, userToFollow }) {
  return this.findOneAndUpdate(
    { owner },
    { $push: { ids: userToFollow } },
    { upsert: true },
  );
};

followingSchema.statics.removeFollowing = async function removeFollowing ({ owner, userToUnfollow }) {
  return this.findOneAndUpdate(
    { owner },
    { $pull: { ids: userToUnfollow } },
  );
};

followingSchema.statics.findByUserId = async function getFeedPosts ({ owner }) {
  const [result = {}] = await this
    .find({ owner })
    .populate({ path: 'ids', model: User })
    .lean();

  return result.ids || [];
};

let Following;

try {
  Following = mongoose.model('Following');
} catch (e) {
  Following = mongoose.model('Following', followingSchema);
}

module.exports = Following;
