const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./src/typeDefs')
const resolvers = require('./src/resolvers')

const app = express()
const port = process.env.PORT || 4000

const server = new ApolloServer({ typeDefs, resolvers })

app.listen({ port }, () => console.log(`Server is running on http://localhost:${port}`))
server.applyMiddleware({ app })