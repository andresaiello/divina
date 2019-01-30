const mongoose = require('mongoose');

const { Schema } = mongoose;

const followingSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  ids: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

let Following;

try {
  Following = mongoose.model('Following');
} catch (e) {
  Following = mongoose.model('Following', followingSchema);
}

module.exports = Following;
