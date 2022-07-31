export interface useTimerPropsType {
  ms: number;
  msToIteration: number;
  format?: (v: number) => string;
  onEnd: () => void;
}
