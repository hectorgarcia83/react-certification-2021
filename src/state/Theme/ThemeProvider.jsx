import React, { useReducer } from 'react';
import ThemeContext from './ThemeContext';
import ThemeReducer, { initialState } from './ThemeReducer';
import { ThemeActions } from './ThemeActions';

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const contextValue = {
    state,
    ...ThemeActions(dispatch),
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
