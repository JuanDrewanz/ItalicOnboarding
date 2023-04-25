import { gql } from "@apollo/client";

export const SEARCH_PRODUCT = gql`
  query Query($title: String) {
    searchProduct(title: $title) {
      title
      avg_rating
      category_id
      id
      imageurl
      price
      reviews_count
      specifications {
        weight
        origin
        material
        dimensions
        color
      }
    }
  }
`;
