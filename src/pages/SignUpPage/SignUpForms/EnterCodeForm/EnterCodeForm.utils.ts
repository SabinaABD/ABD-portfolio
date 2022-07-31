import { millisecondsToSeconds } from "date-fns";

export function formatMs(ms: number) {
  const allSeconds = millisecondsToSeconds(ms);
  const minutes = Math.trunc(allSeconds / 60);
  const seconds = allSeconds - minutes * 60;
  return seconds >= 10 ? `${minutes}:${seconds}` : `${minutes}:0${seconds}`;
}
