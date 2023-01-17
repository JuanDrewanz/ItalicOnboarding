import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Mutation($user: userLoginData) {
    loginUser(user: $user) {
      email
      token
    }
  }
`;
