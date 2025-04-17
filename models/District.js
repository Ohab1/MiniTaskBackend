const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
  name: String,
  stateId: { type: mongoose.Schema.Types.ObjectId, ref: 'State' }
});

module.exports = mongoose.model('District', districtSchema);
