const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  criteria: [{ type: String, required: true }]
});

module.exports = mongoose.model('Profile', profileSchema);
