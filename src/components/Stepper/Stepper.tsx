import React, { useEffect, useState } from "react";
import "./Stepper.styles.scss";
import { StepsList } from "./StepsList/StepsList";
import { StepProgressProps } from "./Stepper.type";

export const Stepper = ({
  stepsList,
  currentStep = 0,
  onFinish,
}: StepProgressProps): JSX.Element => {
  const [step, setStep] = useState(currentStep);

  useEffect(() => {
    setStep(currentStep);
  }, [currentStep]);

  const nextStep = () =>
    stepsList.length - 1 === step ? onFinish() : setStep(+step + 1);
  const SlideContent = stepsList[step].content;

  return (
    <div className="stepper__wrapper">
      <StepsList steps={stepsList} currentStep={step} />
      <div className="stepper__wrapper-content">
        <SlideContent nextStep={nextStep} />
      </div>
    </div>
  );
};
