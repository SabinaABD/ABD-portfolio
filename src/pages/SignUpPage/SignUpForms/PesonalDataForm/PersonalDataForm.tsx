import '../form.styles.scss'

import {
  FIRST_NAME,
  ID_NO,
  LAST_NAME,
} from "./PersonalDataForm.constants";
import {FormPropI, SubmittedDataI} from "../../SignUpPage.types";
import {validation} from "../../SignUpPage.validation";
import {FormInput} from "../../../../components/Inputs/FormInput/FormInput";
import {useForm} from "react-hook-form";


export const PersonalDataForm = ({ nextStep }: Partial<FormPropI>) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onBlur" });


  const onSubmit = (data: Partial<SubmittedDataI>) => {
    if (nextStep) {
      nextStep();
    }
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className="form__item">
            <FormInput
              validation={register(
                "personalDataFirstName",
                validation.personalDataFirstName
              )}
              errors={errors.personalDataFirstName}
              label={FIRST_NAME}
            />
          </span>
          <span className="form__item">
            <FormInput
              validation={register(
                "personalDataLastName",
                validation.personalDataLastName
              )}
              errors={errors.personalDataLastName}
              label={LAST_NAME}
            />
          </span>
          <span className="form__item">
            <FormInput
              validation={register("personalDataID", validation.personalDataID)}
              errors={errors.personalDataID}
              label={ID_NO}
            />
          </span>
          <button className="form__btn" type="submit" disabled={!isValid}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
