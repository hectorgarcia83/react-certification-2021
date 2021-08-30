import { SEARCH, SET_LIST, SET_FAVORITES_LIST } from './VideoTypes';

import { FAVORITES_KEY } from '../../hooks/useFavorites/useFavorites';

const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY));

export const initialState = {
  searchText: 'Wizeline',
  videos: [],
  favoriteVideos: favorites ?? [],
};

const VideoReducer = (state, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, searchText: action.payload };
    case SET_LIST:
      return { ...state, videos: action.payload };
    case SET_FAVORITES_LIST:
      return { ...state, favoriteVideos: action.payload };
    default:
      return { ...state };
  }
};

export default VideoReducer;
