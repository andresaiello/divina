const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const postSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  caption: { type: String, default: '' },
  dots: [{
    xPosition: { type: Number },
    yPosition: { type: Number },
    brand: { type: Schema.Types.ObjectId, required: true },
    title: { type: String },
    price: { type: Number },
    currency: { type: String },
  }],
  picId: { type: String, required: true },
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

postSchema.statics.createPost = async function createPost ({
  author, picUrl, picId, caption,
}) {
  const { _id } = await this
    .create({
      author, picUrl, picId, caption,
    });

  const post = await this.getById(_id);

  return post;
};

postSchema.statics.editPost = async function editPost ({ _id, caption }) {
  const post = await this
    .findOneAndUpdate(
      { _id },
      {
        $set: {
          caption,
        },
      },
    );

  return post.toObject();
};

postSchema.statics.addDot = async function addDot ({ _id, dot }) {
  const post = await this
    .findOneAndUpdate(
      { _id },
      // @todo: maybe generate an unique id based on dot position to avoid two dots in the same position
      { $addToSet: { dots: dot } },
      { new: true },
    );

  return post.toObject();
};

postSchema.statics.deleteDot = async function addDot ({ postId, dotId }) {
  const post = await this
    .findOneAndUpdate(
      { _id: postId },
      // @todo: maybe generate an unique id based on dot position to avoid two dots in the same position
      { $pull: { dots: { _id: dotId } } },
      { new: true },
    );

  return post.toObject();
};

let Post;

try {
  Post = mongoose.model('Post');
} catch (e) {
  Post = mongoose.model('Post', postSchema);
}

module.exports = Post;
