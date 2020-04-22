const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  username: {
    type: String,
    require: true,
    unique: true
  },
  passowrd: {
    type: String,
    require: true,
    unique: true
  },
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
})



module.exports = mongoose.model('User', userSchema)