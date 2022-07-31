export interface TimerPropsType {
  ms: number;
  msToIteration: number;
  format?: (v: number) => string;
  onEnd: () => void;
  className?: string;
}
