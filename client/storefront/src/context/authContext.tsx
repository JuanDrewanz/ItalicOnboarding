import jwtDecode from 'jwt-decode';
import { createContext, ReactNode, useContext, useReducer } from 'react';
import { User } from '../__generated__/graphql';
import * as ls from 'local-storage';

const initialState = {
  user: null,
  isLoggedIn: false,
};

type AuthContextType = {
  user: User;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
};

const AuthContextDefaultVaulues: AuthContextType = {
  user: {},
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(AuthContextDefaultVaulues);

export const useAuth = (): AuthContextType => useContext(AuthContext);

type Props = { children: ReactNode };

function authReducer(state: any, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }: Props) => {
  const value = {};
  const [state, dispatch] = useReducer(authReducer, initialState);
  const login = (userData: User) => {
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  };

  const logout = () => {
    ls.remove('token');
    ls.remove('shoppingCart');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, isLoggedIn: false, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
