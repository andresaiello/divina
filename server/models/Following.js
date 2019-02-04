const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const followingSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  ids: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

followingSchema.statics.findByUserId = async function getFeedPosts ({ owner }) {
  const documents = await this
    .find({ owner })
    .populate({ path: 'ids', model: User })
    .lean();

  return documents;
};

let Following;

try {
  Following = mongoose.model('Following');
} catch (e) {
  Following = mongoose.model('Following', followingSchema);
}

module.exports = Following;
