import { LOG_IN, LOG_OUT } from './AuthTypes';

export const VideoActions = (dispatch) => ({
  login: (payload) => dispatch({ type: LOG_IN, payload }),
  logout: (payload) => dispatch({ type: LOG_OUT, payload }),
});
