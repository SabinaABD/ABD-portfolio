import { InputHint } from "./InputHint/InputHint";
import React, { SyntheticEvent, useState } from "react";
import { FormInputI } from "./FormInput.type";
import cx from "classnames";

export const FormInput = ({
  validation,
  errors,
  label,
  rules = "",
  placeholder,
}: FormInputI) => {
  const [filled, setFilled] = useState("");
  const [active, setActive] = useState(false);
  const [focused, setFocused] = useState(false);

  const onInputChange = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    setFilled(target.value);
    setActive(true);
  };

  const handleActive = () => {
    setActive(false);
    setFocused(false);
  };

  const handleFocused = () => {
    setFocused(true);
  };

  return (
    <div className="form__input">
      <div
        className={cx("form__input-style", { ["error"]: errors })}
        onBlur={handleActive}>
        <textarea
          placeholder={placeholder}
          {...validation}
          required={!!filled}
          onChange={onInputChange}
          onFocus={handleFocused}
        />
        <span className="form__input-label">{label}</span>
        {filled ? "" : <span className="form__input-placeholder">{label}</span>}
      </div>
      <div className="form__input-rules">{filled ? "" : focused && rules}</div>
      <InputHint
        errors={errors}
        inputFill={filled}
        active={active}
        rules={!!rules}
      />
    </div>
  );
};
