import '../form.styles.scss'
import { useForm } from "react-hook-form";

import {PasswordInput} from "../../../../components/Inputs/PasswordInput/PasswordInput";
import {FormPropI, SubmittedDataI} from "../../SignUpPage.types";
import {validation} from "../../SignUpPage.validation";
import {SubmitButton} from "./components/SubmitButton";

export const CreatePasswordForm = ({ nextStep }: Partial<FormPropI>) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: Partial<SubmittedDataI>) => {
    if (nextStep) {
      nextStep();
    }
  };

  const passwordConfirmValidation = (val: string) => {
    if (watch("password") !== val) {
      return "Passwords do not match";
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <PasswordInput
          errors={errors.password}
          validation={register("password", validation.passwordValidation)}
          label={"Create password"}
        />
        <PasswordInput
          errors={errors.confirmPassword}
          validation={register("confirmPassword", {
            required: true,
            validate: passwordConfirmValidation,
          })}
          label={"Confirm password"}
        />
        <SubmitButton valid={!isValid} value="Continue" />
      </form>
    </div>
  );
};
