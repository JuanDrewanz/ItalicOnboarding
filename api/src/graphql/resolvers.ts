import { ApolloError } from 'apollo-server-express';
import { pool } from '../db/connection.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const resolvers = {
  Query: {
    async getCategories(parent, args, context, info) {
      try {
        const categories = await pool.query('SELECT * from categories');
        return categories.rows;
      } catch (e) {
        console.log('Data not found');
      }
    },
    async getProducts(parent, args, context, info) {
      try {
        const products = await pool.query('SELECT * from products');
        return products.rows;
      } catch (e) {
        console.log('Data not found');
      }
    },
    async getProductById(_, args) {
      try {
        const products = await pool.query('SELECT * from products');
        return products.rows.find((prod) => prod.id === args.prodId);
      } catch (e) {
        console.log('Data not found');
      }
    },
    async getProductsByCat(_, args) {
      try {
        const products = await pool.query('SELECT * from products');
        return products.rows.filter((prod) => prod.category_id === args.catId);
      } catch (e) {
        console.log('Data not found');
      }
    },
    async searchProduct(_, args) {
      try {
        const products = await pool.query('SELECT * from products');
        return products.rows.filter((prod) =>
          prod.title.toLowerCase().includes(args.title.toLowerCase())
        );
      } catch (e) {
        console.log('Data not found');
      }
    },
    async user(_, args) {
      try {
        const users = await pool.query('SELECT * from users');
        return users.rows.find((user) => user.id === args.id);
      } catch (e) {
        console.log('Data not found');
      }
    },
  },
  Mutation: {
    async registerUser(
      parent,
      { user: { username, email, password } },
      context,
      info
    ) {
      const oldUser = await pool.query(
        `SELECT id from users WHERE email = '${email}'`
      );

      if (oldUser.rowCount)
        throw new ApolloError(`User with ${email} email is already registered`);

      var encryptedpw = await bcrypt.hash(password, 10);

      let sql = `INSERT into users (username,email,is_active,is_banned,password) VALUES ('${username}','${email}',true,false,'${encryptedpw}') RETURNING *`;
      const newUser = await pool.query(sql);

      const token = jwt.sign(
        {
          user_id: newUser.rows[0].id,
          email: newUser.rows[0].email,
        },
        'UNSAFE_STRING',
        { expiresIn: '2h' }
      );

      sql = `UPDATE users SET token = '${token}' WHERE id = '${newUser.rows[0].id}'`;
      await pool.query(sql);

      return {
        id: newUser.rows[0].id,
        email,
        username,
        password: newUser.rows[0].password,
        token,
      };
    },
    async loginUser(_, { user: { email, password } }) {
      const validUser = await pool.query(
        `SELECT * from users WHERE email = '${email}'`
      );

      if (
        validUser.rowCount &&
        (await bcrypt.compare(password, validUser.rows[0].password))
      ) {
        const token = jwt.sign(
          {
            user_id: validUser.rows[0].id,
            email,
          },
          'UNSAFE_STRING',
          { expiresIn: '2h' }
        );
        let sql = `UPDATE users SET token = '${token}' WHERE id = '${validUser.rows[0].id}'`;
        await pool.query(sql);

        return {
          id: validUser.rows[0].id,
          email,
          username: validUser.rows[0].username,
          token,
        };
      } else {
        throw new ApolloError('Incorrect Password', 'INCORRECT_PW');
      }
    },
  },
};
