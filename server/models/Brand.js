const mongoose = require('mongoose');

const { Schema } = mongoose;

const brandSchema = new Schema({
  name: { type: String, required: true, index: true },
  logoUrl: { type: String },
  website: { type: String, required: true, default: 'empty' },
}, { timestamps: true });

let Brand;

try {
  Brand = mongoose.model('Brand');
} catch (e) {
  Brand = mongoose.model('Brand', brandSchema);
}

module.exports = Brand;
