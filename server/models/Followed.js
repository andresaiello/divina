const mongoose = require('mongoose');

const { Schema } = mongoose;

const followedSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  ids: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

let Followed;

try {
  Followed = mongoose.model('Followed');
} catch (e) {
  Followed = mongoose.model('Followed', followedSchema);
}

module.exports = Followed;
