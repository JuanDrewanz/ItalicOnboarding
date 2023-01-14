import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { resolvers } from './graphql/resolvers.js';
import { pool as db } from './db/connection.js';
import { typeDefinitions } from './graphql/typeDefs.js';
import dbSetup from './db/services/dbSetup.js';

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

//EXAMPLE CREATE USER
// async function createUser(username: string, email: string) {
//   var sql = `INSERT into users (username,email,is_active,is_banned,password) VALUES ('${username}','${email}',true,false,'secretpw') RETURNING *`;
// var newUser;
// db.query(sql, function (err, res) {
//   if (err) throw err;
//   console.log('logue esto', res.rows[0]);
//   newUser = res.rows[0];
// });
// console.log('retorna esto', newUser);
//   const newUser = await db.query(sql);
//   console.log('el nuevo usuario es: ', newUser.rows[0]);
// }

console.log('listo');

await connectToDb();
// await dbSetup();

// createUser('mariana', 'mari@gmail.com');
