const isemail = require('isemail')
const bcrypt = require('bcrypt')

const User = require('../models/user')

const resolvers = {
  Query: {
    currentUser: async (root, args, { user: self, error }) => {
      let success, message, user
      if (error) {
        success = false
        message = "Something went wrong :("
      }
      else {
        success = true
        message = "Successfully queried the current user"
        user = await User.findById(self.id)
      }
      return { success, message, user };
    }
  },
  Mutation: {
    register: async (root, { email, username, password }) => {
      if (!isemail.validate(email)) throw new Error('Invalid email')

      const hashedPass = await bcrypt.hash(password, 12)
      if (!hashedPass) throw new Error('Hashing failed!')

      await new User({ email, username, password: hashedPass })
        .save()
        .catch(err => {
          throw new Error(err.toString())
        })
      return {
        success: true,
        message: 'Welcome to Stacks. Thanks for joining!'
      }
    }
  }
}

module.exports = resolvers