// server/graphql/schema.js

const { gql } = require('apollo-server-express');

// Define your GraphQL schema (type definitions) here
const typeDefs = gql`
  type Query {
    hello: String
    # Add other queries here
  }

  type Mutation {
    # Add your mutations for user authentication and other game features here
  }
`;

module.exports = typeDefs;
