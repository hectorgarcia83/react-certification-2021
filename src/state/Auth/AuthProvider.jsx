import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer, { initialState } from './AuthReducer';
import { VideoActions } from './AuthActions';

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const contextValue = {
    state,
    ...VideoActions(dispatch),
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
