const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stackSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
})

module.exports = mongoose.model('Stack', stackSchema)