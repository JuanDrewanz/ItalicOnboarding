import jwtDecode from 'jwt-decode';
import { createContext, ReactNode, useContext, useReducer } from 'react';
import { User } from '../__generated__/graphql';

const initialState = {
  user: null,
  isLoggedIn: false,
};

type AuthContextType = {
  user: string | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
};

const AuthContextDefaultVaulues: AuthContextType = {
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(AuthContextDefaultVaulues);

export const useAuth = (): AuthContextType => useContext(AuthContext);

type Props = { children: ReactNode };

function authReducer(state, action) {
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
    localStorage.removeItem('token');
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
