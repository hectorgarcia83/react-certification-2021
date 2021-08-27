import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer, { initialState } from './AuthReducer';

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
