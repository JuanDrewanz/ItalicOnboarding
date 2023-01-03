const { gql } = require('apollo-server-express');

export const typeDefinitions = gql`
  type Query {
    hello: String
  }
`;

