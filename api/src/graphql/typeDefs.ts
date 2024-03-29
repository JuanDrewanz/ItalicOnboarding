import { gql } from 'apollo-server-express';

export const typeDefinitions = gql`
  type Query {
    getProducts: [Products]
    getCategories: [Categories]
    getProductsByCat(catId: Int): [Products]
    getProductById(prodId: Int): Products
    searchProduct(title: String): [Products]
    user(id: Int!): User
  }
  type Specifications {
    dimensions: String
    weight: String
    material: String
    color: String
    origin: String
  }
  type Categories {
    id: Int
    name: String
  }
  type Products {
    id: Int
    title: String
    category_id: Int
    avg_rating: Float
    reviews_count: Int
    price: Float
    specifications: Specifications
    imageurl: String
  }
  type User {
    id: Int
    username: String
    email: String
    is_active: Boolean
    is_banned: Boolean
    password: String
    token: String
  }
  input userRegisterData {
    username: String
    email: String
    password: String
  }
  input userLoginData {
    email: String
    password: String
  }
  type Mutation {
    registerUser(user: userRegisterData): User
    loginUser(user: userLoginData): User
  }
`;
