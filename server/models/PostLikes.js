const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const postLikesSchema = new Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }], // @todo prevent dupes
  },
  { timestamps: true },
);

postLikesSchema.statics.findByPost = async function findByPost({ _id }) {
  const [data] = await this.find({ post: _id })
    .populate({ path: 'users', model: User })
    .lean();

  return (data && data.users) || [];
};

postLikesSchema.statics.isPostLiked = async function isPostLiked({ _id, author }) {
  if (!author) return false;

  const [postLikes] = await this.find({ post: _id }).lean();

  return !postLikes || !postLikes.users
    ? false
    : postLikes.users.some(l => l.toString() === author);
};

postLikesSchema.statics.addLike = async function addLike({ postId, user }) {
  try {
    await this.findOneAndUpdate({ post: postId }, { $addToSet: { users: user } }, { upsert: true });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

postLikesSchema.statics.removeLike = async function removeLike({ postId, user }) {
  try {
    await this.findOneAndUpdate({ post: postId }, { $pull: { users: user } });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

let PostLikes;

try {
  PostLikes = mongoose.model('PostLikes');
} catch (e) {
  PostLikes = mongoose.model('PostLikes', postLikesSchema);
}

module.exports = PostLikes;
