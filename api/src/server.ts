// import express from 'express';
// import { ApolloServer, gql } from 'apollo-server-express';
// import { typeDefinitions } from './graphql/typeDefs.js'
// import { resolvers } from './graphql/resolvers.js' 
// import { pool as db } from './db/connection.js';

// async function startServer() {
//   const app = express();
//   const apolloServer = new ApolloServer({
//     typeDefs: typeDefinitions,
//     resolvers,
//   });

//   try {
//     await apolloServer.start();
//     apolloServer.applyMiddleware({ app: app });

//     app.use((req, res) => {
//       res.send('Hello from Apollo server');
//     });

//     app.listen(3000, () => console.log('Server listening on Port 3000'));
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// async function connectToDb() {
//   try {
//     await db.connect();
//     console.log('Successfully connected to database');
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// startServer();
// connectToDb();

// ------------- HASTA ACA ERA COMO LO TENIA

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefinitions } from './graphql/typeDefs.js'
import { resolvers } from './graphql/resolvers.js' 

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);