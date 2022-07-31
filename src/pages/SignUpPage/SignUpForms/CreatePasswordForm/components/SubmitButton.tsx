import React from "react";

export interface ISubmitButton {
  valid: boolean;
  value?: string;
}

export const SubmitButton = ({ valid, value }: ISubmitButton) => {
  return (
    <input className="form__btn" type="submit" disabled={valid} value={value} />
  );
};
