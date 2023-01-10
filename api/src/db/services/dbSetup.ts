import { pool } from '../connection';

export default async function dbSetup() {
  const newTableProducts = `create table if not exists products (
        id SERIAL primary key, 
        title TEXT not null,
        category INTEGER not null,
        avg_rating FLOAT,
        reviews_count INTEGER,
        price FLOAT not null,
        specifications json,
        imageURL TEXT, 
        FOREIGN KEY (category) REFERENCES categories(id)
    )`;

  const newTableCategories = `create table if not exists categories (
        id SERIAL primary key,
        name text not null
    )`;

  const newTableUsers = `create table if not exists users (
        id SERIAL primary key,
        username TEXT unique,
        email TEXT unique,
        is_active BOOLEAN,
        is_banned BOOLEAN,
        password TEXT not null,
        token TEXT
    )`;

  await pool.query(newTableProducts);
  await pool.query(newTableCategories);
  await pool.query(newTableUsers);

  const sql = `select count(1) where exists (select * from products)`;
  const isEmpty = await pool.query(sql);
  console.log(isEmpty);
}
