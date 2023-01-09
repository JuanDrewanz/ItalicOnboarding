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

export const GET_PRODUCTS_BY_CAT = gql`
  query Query($catId: Int) {
    getProductsByCat(catId: $catId) {
      title
      price
      imageurl
    }
  }
`;
