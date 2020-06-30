const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  private: Boolean,
  tags: [String],
  stacks: [{ type: Schema.Types.ObjectId, ref: 'Stack' }]
})

module.exports = mongoose.model('Course', courseSchema)