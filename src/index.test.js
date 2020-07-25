import { usePostRobotOn, usePostRobotSend } from './'
import { renderHook } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('usePostRobotSend', () => {
  it('return send function', () => {
    const { result: { current } } = renderHook(() => usePostRobotSend('test'));

    expect(typeof current).toBe('function');
  })
})

describe('usePostRobotOn', () => {
  xit('be able to wait for emition', () => {})
})