const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: String,
  districtId: { type: mongoose.Schema.Types.ObjectId, ref: 'District' }
});

module.exports = mongoose.model('City', citySchema);
