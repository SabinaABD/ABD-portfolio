import React from "react";
import { TimerPropsType } from "./Timer.type";
import {useTimer} from "../../hooks/useTimer/useTimer";

export const Timer = ({
  ms,
  msToIteration,
  format,
  onEnd,
  className = "",
}: TimerPropsType) => {
  const time = useTimer({
    ms,
    msToIteration,
    format,
    onEnd,
  });
  return <span className={className}>{time}</span>;
};
