import { gql } from 'apollo-server-express';

export const typeDefinitions = gql`
  type Query {
    getProducts: [Products]
    getCategories: [Categories]
    getProductsByArg(catId: Int): [Products]
    searchProduct(title: String): [Products]
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
    category: Int
    avg_rating: Float
    reviews_count: Int
    price: Float
    specifications: Specifications
    imageURL: String
  }
`;
