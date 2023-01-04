import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { resolvers } from './graphql/resolvers.js';
import { pool as db } from './db/connection.js';
import { typeDefinitions } from './graphql/typeDefs.js';

const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

async function connectToDb() {
  try {
    await db.connect();
    console.log('Successfully connected to database');
  } catch (e) {
    console.log(e.message);
  }
}

connectToDb();
