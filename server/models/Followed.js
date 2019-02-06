const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const followedSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  ids: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

followedSchema.statics.findByUserId = async function getFeedPosts ({ owner }) {
  const documents = await this
    .find({ owner })
    .populate({ path: 'ids', model: User })
    .lean();

  return documents;
};

let Followed;

try {
  Followed = mongoose.model('Followed');
} catch (e) {
  Followed = mongoose.model('Followed', followedSchema);
}

module.exports = Followed;
