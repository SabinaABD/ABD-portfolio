import React from "react";
import cn from "classnames";

import "../Stepper.styles.scss";
import { StepsListPropsType } from "../Stepper.type";

export const StepsList = ({
  steps,
  labelClass,
  currentStep = 0,
}: StepsListPropsType): JSX.Element => {
  return (
    <ul className="stepper__steps">
      {steps.map(({ id, label }) => (
        <li
          key={id}
          className={cn("stepper__steps-item", {
            "stepper__steps-item-completed": id < currentStep,
            "stepper__steps-item-current": id === currentStep,
          })}>
          <div className={cn("stepper__steps-item-label", labelClass)}>
            {label}
          </div>
        </li>
      ))}
    </ul>
  );
};
