const mongoose = require('mongoose');

// TODO: mover a otro archivo
mongoose.connect('mongodb://divinaapp:k6gbTKbThhKrD5b1@ds059692.mlab.com:59692/divina-app');

const { Schema } = mongoose;

const postSchema = new Schema({
  username: { type: String, required: true },
  picUrl: { type: String, required: true },
}, { timestamps: true });

let Post;

try {
  Post = mongoose.model('Post');
} catch (e) {
  Post = mongoose.model('Post', postSchema);
}

module.exports = Post;
