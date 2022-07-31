import { useState, useCallback, SetStateAction } from "react";

export function useIterableState<T>(
  initialState: T,
  iterator: SetStateAction<T>
): [T, () => void] {
  const [state, setState] = useState<T>(initialState);
  const iterate = useCallback(() => setState(iterator), []);
  return [state, iterate];
}
