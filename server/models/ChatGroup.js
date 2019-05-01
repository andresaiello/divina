const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const chatGroupSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    picUrl: [{ type: String }],
    caption: { type: String, default: '' },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
);

chatGroupSchema.statics.getChatGroups = async function getChatGroups({ member, amount = 500 }) {
  // ask for 1 document more to check if there is another page
  // (the other option is to perform 2 queries)
  const checkNextPage = amount + 1;

  const documents = await this
    // .find({ author: member })
    .find({ members: member })
    .populate({ path: 'author', model: User })
    .populate({ path: 'members', model: User })
    .lean()
    .sort({ createdAt: 'desc' }) // (from startingDate + 1 to X)
    .limit(checkNextPage);

  const nodes = documents.slice(0, amount);
  const lastCursor = nodes.length ? new Date(nodes[nodes.length - 1].createdAt).getTime() : '1';

  return { nodes, lastCursor, hasNextPage: documents.length === checkNextPage };
};

chatGroupSchema.statics.getById = async function getById(_id) {
  const [chatGroup] = await this.find({ _id })
    .populate({ path: 'author', model: User })
    .populate({ path: 'members', model: User })
    .lean();
  return chatGroup;
};

chatGroupSchema.statics.getByAuthor = async function getByAuthor({ author }) {
  const nodes = await this.find({ author })
    .populate({ path: 'author', model: User })
    .populate({ path: 'members', model: User })
    .lean()
    .sort({ createdAt: 'desc' });

  return { nodes };
};

chatGroupSchema.statics.createChatGroup = async function createChatGroup({
  author,
  picUrl,
  caption,
  members,
}) {
  const { _id } = await this.create({
    author,
    picUrl,
    caption,
    members,
  });

  const chatGroup = await this.getById(_id);

  return chatGroup;
};

let ChatGroup;

try {
  ChatGroup = mongoose.model('ChatGroup');
} catch (e) {
  ChatGroup = mongoose.model('ChatGroup', chatGroupSchema);
}

module.exports = ChatGroup;
