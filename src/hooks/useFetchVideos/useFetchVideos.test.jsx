import { act, renderHook } from '@testing-library/react-hooks';
import useFetchVideos from './useFetchVideos';

describe('useFetchVideos hook', () => {
  it('Mounts correctly', () => {
    const { result } = renderHook(() => useFetchVideos());
    expect(result.current).toBeDefined();
    expect(result.current[0]).toBeUndefined();
  });

  it('Fetch videos', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchVideos());
    expect(result.current.videos.length).toBe(0);
    act(() => {
      result.current.searchVideos('Wizeline');
    });

    await waitForNextUpdate();
    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);

    expect(result.current.videos.length).not.toBe(0);
  });

  it('Fetch Video Detail', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchVideos());
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
