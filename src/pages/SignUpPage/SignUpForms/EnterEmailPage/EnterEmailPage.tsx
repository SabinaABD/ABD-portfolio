import styles from "pages/SignUpPage/SignUpForms/EnterEmailPage/EnterEmailForm.style.module.scss";
import { useForm } from "react-hook-form";
import { EMAIL_FIELD_NAME, EMAIL_VALIDATION } from "./EnterEmailForm.constants";
import {SubmittedDataI} from "../../SignUpPage.types";
import {FormInput} from "../../../../components/Inputs/FormInput/FormInput";

export const EnterEmailPage = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onBlur" });


  const onSubmit = (data: Partial<SubmittedDataI>) => {

  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <FormInput
            validation={register(EMAIL_FIELD_NAME, EMAIL_VALIDATION)}
            errors={errors[EMAIL_FIELD_NAME]?.message}
            label={"Enter your email"}
          />
          <div className={styles.rules}>
            By clicking the ‘Continue’ button, you agree to the Privacy Policy
            and the Rules of remote banking services.
          </div>
          <button
            className={styles.submit_btn}
            type="submit"
            disabled={!isValid}>
            Continue
          </button>
        </div>
      </form>
    </>
  );
};
