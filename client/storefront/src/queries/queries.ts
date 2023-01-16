import { gql } from '@apollo/client';

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

export const GET_CATEGORIES = gql`
  query Query {
    getCategories {
      id
      name
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

export const REGISTER_USER = gql`
  mutation Mutation($user: userRegisterData) {
    registerUser(user: $user) {
      email
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Mutation($user: userLoginData) {
    loginUser(user: $user) {
      email
      token
    }
  }
`;
