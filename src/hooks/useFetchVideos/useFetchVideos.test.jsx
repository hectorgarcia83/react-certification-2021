import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import useFetchVideos from './useFetchVideos';
import VideoProvider from '../../state/Videos/VideoProvider';

describe('useFetchVideos hook', () => {
  it('Mounts correctly', () => {
    const wrapper = ({ children }) => <VideoProvider>{children}</VideoProvider>;
    const { result } = renderHook(() => useFetchVideos(), { wrapper });
    expect(result.current).toBeDefined();
    expect(result.current[0]).toBeUndefined();
  });

  it('Fetch videos', async () => {
    const wrapper = ({ children }) => <VideoProvider>{children}</VideoProvider>;
    const { result, waitForNextUpdate } = renderHook(() => useFetchVideos(), { wrapper });

    act(() => {
      result.current.searchVideos('Wizeline');
    });

    await waitForNextUpdate();
    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
  });

  it('Fetch Video Detail', async () => {
    const wrapper = ({ children }) => <VideoProvider>{children}</VideoProvider>;
    const { result, waitForNextUpdate } = renderHook(() => useFetchVideos(), { wrapper });

    expect(result.current.videoDetail).toBeUndefined();

    act(() => {
      result.current.getVideoDetail('NkZkhISXZ_Q');
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
    expect(result.current.videoDetail).not.toBeUndefined();
  });
});
