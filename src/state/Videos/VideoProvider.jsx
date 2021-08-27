import React, { useReducer } from 'react';
import VideoContext from './VideoContext';
import VideoReducer, { initialState } from './VideoReducer';

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VideoReducer, initialState);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>{children}</VideoContext.Provider>
  );
};

export default VideoProvider;
