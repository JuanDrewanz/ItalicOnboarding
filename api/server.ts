const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import { typeDefinitions } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers' 
import { pool as db } from './db/connection';

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs: typeDefinitions,
    resolvers,
  });

  try {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });

    app.use((req, res) => {
      res.send('Hello from Apollo server');
    });

    app.listen(3000, () => console.log('Server listening on Port 3000'));
  } catch (e) {
    console.log(e.message);
  }
}

async function connectToDb() {
  try {
    await db.connect();
    console.log('Successfully connected to database');
  } catch (e) {
    console.log(e.message);
  }
}

startServer();
connectToDb();
