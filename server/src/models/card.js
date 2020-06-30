const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
  front: {
    type: String,
    required: true
  },
  back: String,
  flipped: Boolean
})

module.exports = mongoose.model("Card", cardSchema)