import { useRef, useCallback } from "react";

export function useInterval(): [(id: NodeJS.Timer) => void, () => void] {
  const idRef = useRef<NodeJS.Timer | null>(null);
  const setIntervalId = useCallback(
    (id: NodeJS.Timer) => (idRef.current = id),
    []
  );
  const deleteInterval = useCallback(() => {
    if (idRef.current) clearInterval(idRef.current);
  }, []);
  return [setIntervalId, deleteInterval];
}
