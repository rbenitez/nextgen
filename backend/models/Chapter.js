const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  profile: { type: String, required: true }
});

module.exports = mongoose.model('Chapter', chapterSchema);
