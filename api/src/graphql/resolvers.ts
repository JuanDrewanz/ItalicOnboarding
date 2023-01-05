import { pool } from '../db/connection.js';

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
};
