export interface StepType {
  id: number;
  label: string;
  content?: any;
}

export interface StepProgressProps {
  stepsList: StepType[];
  currentStep?: number;
  onFinish: () => void;
}

export interface StepsListPropsType {
  steps: StepType[];
  labelClass?: string;
  currentStep: string | number;
}
