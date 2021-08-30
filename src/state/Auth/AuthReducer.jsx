import { SESSION_KEY } from '../../hooks/useAuth/useAuth';

const sessionSaved = JSON.parse(localStorage.getItem(SESSION_KEY));

export const initialState = { user: sessionSaved };

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, user: action.payload };
    case 'LOG_OUT':
      return { ...state, user: undefined };
    default:
      return { ...state };
  }
};

export default AuthReducer;
