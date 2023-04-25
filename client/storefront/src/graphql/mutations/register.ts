import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Mutation($user: userRegisterData) {
    registerUser(user: $user) {
      email
      token
    }
  }
`;
