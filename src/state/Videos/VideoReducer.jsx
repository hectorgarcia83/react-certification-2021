export const initialState = { searchText: 'Wizeline', videos: [] };

const VideoReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, searchText: action.payload };
    case 'SET_LIST':
      return { ...state, videos: action.payload };
    default:
      return { ...state };
  }
};

export default VideoReducer;
