import React, { useReducer } from 'react';
import VideoContext from './VideoContext';
import VideoReducer, { initialState } from './VideoReducer';
import { VideoActions } from './VideoActions';

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VideoReducer, initialState);

  const contextValue = {
    state,
    ...VideoActions(dispatch),
  };

  return <VideoContext.Provider value={contextValue}>{children}</VideoContext.Provider>;
};

export default VideoProvider;
