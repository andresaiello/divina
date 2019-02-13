const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const followersSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  ids: [{ type: Schema.Types.ObjectId, ref: 'User' }], // @todo prevent dupes
}, { timestamps: true });

followersSchema.statics.isFollowedBy = async function isFollowedBy ({ owner, followedBy }) {
  if (!owner || !followedBy) return false;

  const [followers] = await this
    .find({ owner })
    .lean();

  // @todo: replace all .some filters because they block the event loop and can harm performance
  return followers && followers.ids.length ? followers.ids.some(id => id.toString() === followedBy) : false;
};

followersSchema.statics.countFollowers = async function countFollowers ({ owner }) {
  if (!owner) return 0;

  const [followers] = await this
    .find({ owner })
    .lean();

  return (followers && followers.ids.length) || 0;
};

followersSchema.statics.addFollower = async function addFollower ({ owner, newFollower }) {
  try {
    await this.findOneAndUpdate(
      { owner },
      { $addToSet: { ids: newFollower } },
      { upsert: true },
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

followersSchema.statics.removeFollower = async function removeFollower ({ owner, followerToRemove }) {
  try {
    await this.findOneAndUpdate(
      { owner },
      { $pull: { ids: followerToRemove } },
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

followersSchema.statics.findByUserId = async function findByUserId ({ owner }) {
  const [result = {}] = await this
    .find({ owner })
    .populate({ path: 'ids', model: User })
    .lean();

  return result.ids || [];
};

let Followers;

try {
  Followers = mongoose.model('Followers');
} catch (e) {
  Followers = mongoose.model('Followers', followersSchema);
}

module.exports = Followers;
