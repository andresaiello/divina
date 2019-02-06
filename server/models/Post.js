const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const postSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  picUrl: { type: String, required: true },
}, { timestamps: true });

postSchema.statics.getFeedPosts = async function getFeedPosts ({ startingDate = Date.now(), amount = 5 }) {
  // ask for 1 document more to check if there is another page
  // (the other option is to perform 2 queries)
  const checkNextPage = amount + 1;

  const documents = await this
    .find({ createdAt: { $lt: startingDate } })
    .populate({ path: 'author', model: User })
    .lean()
    .sort({ createdAt: 'desc' }) // (from startingDate + 1 to X)
    .limit(checkNextPage);

  const nodes = documents.slice(0, amount);
  const lastCursor = nodes.length ? new Date(nodes[nodes.length - 1].createdAt).getTime() : '1';

  return { nodes, lastCursor, hasNextPage: documents.length === checkNextPage };
};

postSchema.statics.getById = async function getById (_id) {
  const [post] = await this
    .find({ _id })
    .populate({ path: 'author', model: User })
    .lean();
  return post;
};

postSchema.statics.getByAuthor = async function getByAuthor ({ author }) {
  const nodes = await this
    .find({ author })
    .lean()
    .sort({ createdAt: 'desc' });

  return { nodes };
};

let Post;

try {
  Post = mongoose.model('Post');
} catch (e) {
  Post = mongoose.model('Post', postSchema);
}

module.exports = Post;