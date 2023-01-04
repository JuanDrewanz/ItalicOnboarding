import { gql } from 'apollo-server-express';

export const typeDefinitions = gql`
  type Query {
    getProducts: [Products]
    getCategories: [Categories]
    getProductsByArg: [Products]
  }
  type Categories {
    id: Int,
    name: String
  }
  type Products {
    id: Int, 
    title: String,
    category: Int,
    avg_rating: Int,
    reviews_count: Int,
    price: Int,
    specifications: String,
    imageURL: String, 
  }
`;