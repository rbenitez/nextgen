
const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  answers: [{ type: String, required: true }],
  profile: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserProfile', userProfileSchema);
