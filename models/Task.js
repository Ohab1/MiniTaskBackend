const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  taskStatus: {
    type: String,
    enum: ["Pending", "Completed", "InProgress"],
    default: "Pending"
  },
  image: {
    type: String,
    default: null
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  state: { type: mongoose.Schema.Types.ObjectId, ref: 'State' },
  district: { type: mongoose.Schema.Types.ObjectId, ref: 'District' },
  city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);