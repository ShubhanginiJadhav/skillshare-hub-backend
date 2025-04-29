const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: [
    {
      type: { type: String },
      url: String,
      description: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
