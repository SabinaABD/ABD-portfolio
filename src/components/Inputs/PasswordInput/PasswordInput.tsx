import { VisibilityIcon } from "../../../pages/SignUpPage/SignUpForms/CreatePasswordForm/components/VisibilityIcon";
import { ERROR_TEXT } from "../../../pages/SignUpPage/SignUpForms/CreatePasswordForm/CreatePasswordForm.constants";
import React, { SyntheticEvent, useState } from "react";
import { FormInputI } from "../FormInput/FormInput.type";

export const PasswordInput = ({ validation, label, errors }: FormInputI) => {
  const [visible, setVisible] = useState(false);
  const [filled, setFilled] = useState("");
  const [active, setActive] = useState(false);
  const [focused, setFocused] = useState(false);

  const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFilled(target.value);
  };

  const handleActive = () => {
    setActive(false);
    setFocused(false);
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="form__input">
      <div className="form__input-style" onBlur={handleActive}>
        <input
          type={visible ? "text" : "password"}
          {...validation}
          required={!!filled}
          onChange={onInputChange}
        />
        <span className="form__input-label">{label}</span>
        {filled ? "" : <span className="form__input-placeholder">{label}</span>}
      </div>
      <VisibilityIcon
        errors={errors}
        onClick={handleClick}
        visibility={visible}
      />
      <div className="form__error">
        {errors && <p>{errors.message || ERROR_TEXT}</p>}
      </div>
    </div>
  );
};
