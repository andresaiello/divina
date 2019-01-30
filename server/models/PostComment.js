const mongoose = require('mongoose');

const { Schema } = mongoose;

const postCommentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  content: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post' },
}, { timestamps: true });

postCommentSchema.statics.findByPost = async function findByPost ({ postId }) {
  return this
    .find({ post: postId })
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
