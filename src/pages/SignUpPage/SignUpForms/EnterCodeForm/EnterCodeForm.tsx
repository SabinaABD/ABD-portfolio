import React, { useState } from "react";

import styles from "./EnterCodeForm.style.module.scss";

import { useForm } from "react-hook-form";

import {
  CODE_VALID_DURATION,
  CODE_VALIDATION,
  TIMER_MS,
  TIMER_MS_TO_ITERATE,
  CODE_FIELD_NAME,
} from "./EnterCodeForm.constants";
import { formatMs } from "./EnterCodeForm.utils";

import {FormInput} from "../../../../components/Inputs/FormInput/FormInput";
import {FormPropI, SubmittedDataI} from "../../SignUpPage.types";
import {Timer} from "../../../../components/Timer/Timer";

export const EnterCodeForm = ({ nextStep }: Partial<FormPropI>) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  const [resendCode, setResendCode] = useState(false);

  const sendCodeAgain = () => {
    return setResendCode(true);
  };

  const startTimer = () => {
    return setResendCode(false);
  };

  const onSubmit = (data: Partial<SubmittedDataI>) => {
    if (nextStep) {
      nextStep();
    }
  };

  return (
    <form
      action="#"
      className={styles.container}
      onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.content}>
        <div>
          <span className={styles.header}>
            {"We’ve just sent a letter with a 6-digit verification code to "}
          </span>
          <span className={styles.phone}>email@email.com</span>
        </div>
        <div className={styles.input_and_button_wrapper}>
          <FormInput
            validation={register(CODE_FIELD_NAME, CODE_VALIDATION)}
            errors={errors[CODE_FIELD_NAME]?.message}
            label={"Enter the code"}
          />
          <button className="form__btn" type="submit" disabled={!isValid}>
            Continue
          </button>
        </div>
        {resendCode ? (
          <div className={styles.resend_button} onClick={startTimer}>
            Resend code
          </div>
        ) : (
          <div>
            <span className={styles.timer}>
              {"Resending the code will be available in "}
            </span>
            <Timer
              className={styles.timer}
              ms={TIMER_MS}
              msToIteration={TIMER_MS_TO_ITERATE}
              onEnd={sendCodeAgain}
              format={formatMs}
            />
            <span>{" seconds"}</span>
          </div>
        )}
        <div className={styles.callout}>
          <span>
            The code is valid for {CODE_VALID_DURATION}. Do not share it with
            anyone. Make sure the letter you received is from MyComp.
          </span>
        </div>
      </div>
    </form>
  );
};
