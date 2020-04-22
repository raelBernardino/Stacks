const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    id: ID
    email: String!
    username: String!
    courses: [Course]
  }
  type Course {
    id: ID
    title: String!
    description: String
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
    back: String!
    flipped: Boolean
  }
  type Response {
    success: Boolean!
    message: String
    user: User
  }
  type Query {
    currentUser: Response!
  }
  type Mutation {
    register(email: String!, username: String!, password: String!): Response!
  }
`
module.exports = { typeDefs }