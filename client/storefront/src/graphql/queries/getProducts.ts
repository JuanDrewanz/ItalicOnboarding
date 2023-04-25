import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      id
      category_id
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
      id
      category_id
      title
      price
      avg_rating
      reviews_count
      imageurl
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query Query($prodId: Int) {
    getProductById(prodId: $prodId) {
      avg_rating
      category_id
      id
      price
      imageurl
      reviews_count
      title
      specifications {
        color
        dimensions
        material
        origin
        weight
      }
    }
  }
`;
