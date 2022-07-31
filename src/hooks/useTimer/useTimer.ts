import { useCallback, useEffect } from "react";


import { useTimerPropsType } from "./useTimer.type";
import {useInterval} from "./useInterval";
import {useIterableState} from "./useIterableState";

export function useTimer({
  ms,
  msToIteration,
  format = String,
  onEnd,
}: useTimerPropsType): string {
  const [setIntervalId, deleteInterval] = useInterval();
  const iterator = useCallback((v: any) => v - msToIteration, [msToIteration]);
  const [time, iterateTime] = useIterableState<number>(ms, iterator);

  useEffect(() => {
    setIntervalId(setInterval(iterateTime, msToIteration));
    return deleteInterval;
  }, []);

  useEffect(() => {
    if (time === 0) {
      deleteInterval();
      onEnd();
    }
  }, [time]);

  return format(time);
}
