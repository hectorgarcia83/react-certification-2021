import { renderHook } from '@testing-library/react-hooks';
import useWindowResize from './useWindowResize';

global.window.innerWidth = 800;
global.window.innerHeight = 400;

describe('Window Resize Hook', () => {
  it('Mounts correctly', () => {
    const { result } = renderHook(() => useWindowResize());
    expect(result.current).toBeDefined();
    expect(result.current[0]).toBeUndefined();
  });

  it(`should do some stuff on window resize event`, () => {
    const { result } = renderHook(() => useWindowResize());
    expect(result.current.width).toEqual(800);
    expect(result.current.height).toEqual(400);
  });
});
