// server/graphql/resolvers.js

// Implement your GraphQL resolvers here
const resolvers = {
    Query: {
        hello: () => 'Hello, world!',
      // Add other query resolvers here
    },
    Mutation: {
      // Add your mutation resolvers for user authentication and other game features here
    },
};

module.exports = resolvers;
