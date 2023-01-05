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
    async getProductsByArg(_, args) {
      try {
        const products = await pool.query('SELECT * from products');
        return products.rows.filter((prod) => prod.category === args.catId);
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
  },
  Mutation: {
    async registerUser(
      parent,
      { userRegisterData: { username, email, password } },
      context,
      info
    ) {
      const oldUser = await pool.query(
        `SELECT id from users WHERE email = ${email}`
      );
      if (oldUser)
        throw new ApolloError(`User with ${email} email is already registered`);

      var encryptedpw = await bcrypt.hash(password, 10);

      var sql = `INSERT into users (username,email,is_active,is_banned,password) VALUES ('${username}','${email}',true,false,'${password}') RETURNING *`;
      const newUser = await pool.query(sql);

      console.log(newUser);

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
    },
  },
};
