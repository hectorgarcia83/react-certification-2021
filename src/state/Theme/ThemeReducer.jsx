import Theme from '../../theme';

import { SWITCH_THEME } from './ThemeTypes';

export const initialState = { theme: Theme.light };

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return { ...state, theme: state.theme === Theme.light ? Theme.dark : Theme.light };
    default:
      return { ...state, theme: Theme.light };
  }
};

export default ThemeReducer;
