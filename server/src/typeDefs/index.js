const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    id: ID
    email: String
    username: String
    courses: [Course]
  }
  type Course {
    id: ID
    title: String!
    description: String
    private: Boolean
    tags: [String]
    stacks: [Stack]
  }
  type Stack {
    id: ID
    title: String!
    description: String
    cards: [Card]
  }
  type Card {
    id: ID
    front: String!
    back: String
    flipped: Boolean
  }
  type Response {
    success: Boolean!
    message: String
    user: User
    courses: Course
    stacks: Stack
    token: String
  }
  type Query {
    currentUser: Response!
  }
  type Mutation {
    register(email: String!, username: String!, password: String!): Response!
    login(username: String!, password: String!): Response!
    addCourse(title: String!, description: String!, tags: [String]): Response!
    addStack(courseId: String! title: String!, description: String!): Response!
    addCard(stackId: String! front: String!, back: String!): Response!
    deleteUser(email: String!, userId: String!): Response!
    deleteCourse(courseId: String!): Response!
    deleteStack(courseId: String!, stackId: String!): Response!
    deleteCard(stackId: String!, cardId: String!): Response!
  }
`
module.exports = typeDefs