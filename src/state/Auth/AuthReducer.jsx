export const initialState = { user: undefined };

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
