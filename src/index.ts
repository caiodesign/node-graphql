const express = require('express')
const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')

const app = express();

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => 'hello world '
}

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000, () => console.log('Running a GraphQL API server at localhost:4000/graphql'));
