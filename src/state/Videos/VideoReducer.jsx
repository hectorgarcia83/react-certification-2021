export const initialState = { searchText: 'Wizeline' };

const VideoReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, searchText: action.payload };
    default:
      return { ...state };
  }
};

export default VideoReducer;
