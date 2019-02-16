const { ApolloServer, gql } = require('apollo-server');
const { GraphQLDate } = require('graphql-iso-date');

const Projects = [
  {
    name: 'Foo',
    coverage: 100,
    lastUpdated: () =>  new Date(1982,01,01)
  },
  {
    name: 'Bar',
    coverage: 75,
    lastUpdated: () => new Date(1982, 01, 01)
  },
  {
    name: 'Baz',
    coverage: 50,
    lastUpdated: () => new Date(1982, 01, 01)
  },
  {
    name: 'Far',
    coverage: 25,
    lastUpdated: () => new Date(1982, 01, 01)
  },
  {
    name: 'Boo',
    coverage: 0,
    lastUpdated: () => new Date(1982, 01, 01)
  }
];
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  scalar Date

  type Project {
    name: String
    coverage: Int
    lastUpdated: Date
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    projects: [Project]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    projects: () => Projects,
  },
  Date : GraphQLDate
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});