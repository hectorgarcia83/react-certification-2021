import React, { useReducer } from 'react';
import ThemeContext from './ThemeContext';
import ThemeReducer, { initialState } from './ThemeReducer';

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
