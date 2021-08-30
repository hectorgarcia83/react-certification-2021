import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../state/Auth/AuthContext';

const ProtectedRoute = (props) => {
  const { state } = useContext(AuthContext);
  const isLoggedIn = !!state.user;
  return isLoggedIn ? <Route {...props} /> : <Redirect to="/" />;
};

export default ProtectedRoute;
