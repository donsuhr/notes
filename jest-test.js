import { renderHook } from "@testing-library/react-hooks";

it("test a useEffect", () => {
  const useEffect = jest.spyOn(React, "useEffect");
  const removeEventListener = jest.spyOn(window, "removeEventListener");
  renderHook(useWindowSize);
  expect(useEffect).toHaveBeenCalledTimes(1);

  const effect = useEffect.mock.calls[0][0];
  const cleanup = effect();

  const numCalls = removeEventListener.mock.calls.length;
  cleanup();
  expect(removeEventListener).toHaveBeenCalledTimes(numCalls + 1);
});
