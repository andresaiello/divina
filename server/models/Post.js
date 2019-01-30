const mongoose = require('mongoose');

// TODO: mover a otro archivo
mongoose.connect('mongodb://divinaapp:k6gbTKbThhKrD5b1@ds059692.mlab.com:59692/divina-app');

const { Schema } = mongoose;

const postSchema = new Schema({
  username: { type: String, required: true },
  picUrl: { type: String, required: true },
}, { timestamps: true });

postSchema.statics.getFeedPosts = async function getFeedPosts ({ startingDate = Date.now(), amount = 5 }) {
  // ask for 1 document more to check if there is another page
  // (the other option is to perform 2 queries)
  const checkNextPage = amount + 1;

  const documents = await this
    .find({ createdAt: { $lt: startingDate } })
    .lean()
    .sort({ createdAt: 'desc' }) // (from startingDate + 1 to X)
    .limit(checkNextPage);

  const nodes = documents.slice(0, amount);
  const lastCursor = nodes.length ? new Date(nodes[nodes.length - 1].createdAt).getTime() : '1';

  return { nodes, lastCursor, hasNextPage: documents.length === checkNextPage };
};

let Post;

try {
  Post = mongoose.model('Post');
} catch (e) {
  Post = mongoose.model('Post', postSchema);
}

module.exports = Post;
