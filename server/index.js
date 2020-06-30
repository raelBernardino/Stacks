const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: __dirname + '/./../.env' });

const typeDefs = require('./src/typeDefs')
const resolvers = require('./src/resolvers')
require('./src/mongoose')

const app = express()
const port = process.env.PORT || 4000
const SECRET = process.env.SECRET

const addUser = async (req) => {
  const token = req.headers.authorization
  console.log(token)
  if (token) {
    try {
      const { user } = await jwt.verify(token, SECRET)
      req.user = user
    }
    catch (err) {
      if (err.name === "TokenExpiredError")
        req.error = err.name
    }
  }
  req.next()
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    user: req.user,
    error: req.error,
    SECRET: SECRET,
  })
})

app.listen({ port }, () => { console.log(`Server at http://localhost:${port}${server.graphqlPath}`) })

app.use(addUser)
server.applyMiddleware({ app })