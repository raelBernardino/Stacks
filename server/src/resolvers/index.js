const isemail = require('isemail')
const jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')

const User = require('../models/user')
const Course = require('../models/course')
const Stack = require('../models/stack')
const Card = require('../models/card')
const ObjectId = require('mongoose').Types.ObjectId;

const resolvers = {
  User: {
    courses: ({ courses }) => {
      return courses.map(async course => await Course.findById(course))
    }
  },
  Course: {
    stacks: ({ stacks }) => {
      return stacks.map(async stack => await Stack.findById(stack))
    }
  },
  Stack: {
    cards: ({ cards }) => {
      return cards.map(async card => await Card.findById(card))
    }
  },
  Query: {
    currentUser: async (root, args, { user: self, error }) => {
      let success, message, user
      if (error === "TokenExpiredError") {
        success = false
        message = "You've been logged out, please login again"
      }
      else if (!self) {
        success = false;
        message = 'Please Login.';
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
      if (!isemail.validate(email)) throw new Error('Invalid email!');

      const hashedPass = await bcrypt.hash(password, 12);
      if (!hashedPass) throw new Error('Hashing failed!');

      await new User({ email, username, password: hashedPass })
        .save()
        .catch((err) => {
          throw new Error(err.toString());
        });

      return {
        success: true,
        message: 'Welcome to Stacks. Thanks for joining!'
      }
    },
    login: async (root, { username, password }, { SECRET }) => {
      const user = await User.findOne({ username })
      if (!user) throw new Error("Invalid username!")

      const match = await bcrypt.compare(password, user.password)
      if (!match) throw new Error("Invalid password!")

      const token = jwt.sign(
        {
          user: {
            id: user._id,
            username: user.username,
          },
        },
        SECRET,
        { expiresIn: '1h' },
      );

      return {
        success: true,
        message: `Welcome back ${username}!`,
        token
      }
    },
    // Add Mutations
    addCourse: async (root, { title, description }, { user: self }) => {
      const course = await new Course({ title, description })
        .save()
        .catch(err => {
          throw new Error(err.toString())
        })

      const user = await User.findOneAndUpdate(
        { _id: self.id },
        { $addToSet: { courses: course } },
        { new: true })

      return {
        success: true,
        message: `${course.title} has been added to your courses!`,
        user
      }
    },
    addStack: async (root, { courseId, title, description }) => {
      const stack = await new Stack({ title, description })
        .save()
        .catch(err => {
          throw new Error(err.toString())
        })

      await Course.updateOne({ _id: courseId }, { $addToSet: { stacks: stack } })

      return {
        success: true,
        message: `You created "${stack.title}" as a stack!`
      }
    },
    addCard: async (root, { stackId, front, back }) => {
      const card = await new Card({ front, back })
        .save()
        .catch(err => {
          throw new Error(err.toString())
        })

      await Stack.updateOne({ _id: stackId }, { $addToSet: { cards: card } })

      return {
        success: true,
        message: `Card successfully added!`
      }
    },
    // Delete Mutations
    deleteUser: async (root, { email, userId }, { user: self }) => {
      await User.deleteOne({ email: email, _id: userId }, { $pull: { userId } })
      return {
        success: true,
        message: 'You\'ve successfully deleted a user'
      }
    },
    deleteCourse: async (root, { courseId }, { user: self }) => {
      await User.updateOne({ _id: self.id }, { $pull: { courses: courseId } })
      await Course.deleteOne({ _id: courseId })

      return {
        success: true,
        message: 'You\'ve successfully deleted a course'
      }
    },
    deleteStack: async (root, { courseId, stackId }) => {
      await Course.updateOne({ _id: courseId }, { $pull: { stacks: stackId } })
      await Stack.deleteOne({ _id: stackId })

      return {
        success: true,
        message: 'You\'ve successfully deleted a stack'
      }
    },
    deleteCard: async (root, { stackId, cardId }) => {
      await Stack.updateOne({ _id: stackId }, { $pull: { cards: cardId } })
      await Card.deleteOne({ _id: cardId })

      return {
        success: true,
        message: 'You\'ve successfully deleted a card'
      }
    }
  }
}

module.exports = resolvers