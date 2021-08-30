import { SEARCH, SET_LIST, SET_FAVORITES_LIST } from './VideoTypes';

export const VideoActions = (dispatch) => ({
  search: (payload) => dispatch({ type: SEARCH, payload }),
  updateList: (payload) => dispatch({ type: SET_LIST, payload }),
  updateFavoritesList: (payload) => dispatch({ type: SET_FAVORITES_LIST, payload }),
});
