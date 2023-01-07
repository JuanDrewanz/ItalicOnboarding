import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      id
      category
      title
      price
      avg_rating
      reviews_count
      imageurl
    }
  }
`;
