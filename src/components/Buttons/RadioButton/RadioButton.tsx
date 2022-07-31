import { RadioButtonPropsType } from "./RadioButton.type";
import React from "react";
import "./RadioButton.styles.scss";

export const RadioButton = ({
  children,
  disabled = false,
  id,
  checked,
  name,
}: Partial<RadioButtonPropsType>) => {
  return (
    <div className="radiobutton">
      <input
        type="radio"
        name={name}
        id={id}
        disabled={disabled}
        className="radiobutton__input"
        checked={checked}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
