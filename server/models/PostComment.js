const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const postCommentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
}, { timestamps: true });

postCommentSchema.statics.findByPost = async function findByPost ({ postId }) {
  return this
    .find({ post: postId })
    .populate({ path: 'author', model: User })
    .sort({ createdAt: 'asc' })
    .lean();
};

let PostComment;

try {
  PostComment = mongoose.model('PostComment');
} catch (e) {
  PostComment = mongoose.model('PostComment', postCommentSchema);
}

module.exports = PostComment;
