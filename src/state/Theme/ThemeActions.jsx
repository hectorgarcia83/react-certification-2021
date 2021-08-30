import { SWITCH_THEME } from './ThemeTypes';

export const ThemeActions = (dispatch) => ({
  switchTheme: (payload) => dispatch({ type: SWITCH_THEME, payload }),
});
