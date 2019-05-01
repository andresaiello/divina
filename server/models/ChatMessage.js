const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const chatMessageSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    chatGroup: { type: Schema.Types.ObjectId, ref: 'ChatGroup', required: true },
  },
  { timestamps: true },
);

chatMessageSchema.statics.findByChatGroup = async function findByChatGroup({ chatGroupId }) {
  return this.find({ chatGroup: chatGroupId })
    .populate({ path: 'author', model: User })
    .sort({ createdAt: 'asc' })
    .lean();
};

chatMessageSchema.statics.addNew = async function addNew({ chatGroupId, author, content }) {
  const { _id } = await this.create({ chatGroup: chatGroupId, author, content });

  const [newComment] = await this.find({ _id }).populate({ path: 'author', model: User });

  return newComment;
};

let ChatMessage;

try {
  ChatMessage = mongoose.model('ChatMessage');
} catch (e) {
  ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);
}

module.exports = ChatMessage;
