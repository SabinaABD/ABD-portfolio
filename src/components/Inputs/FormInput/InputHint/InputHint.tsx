import { InputHintI } from "./InputHint.type";
import {ErrorIcon} from "../../../Icons/ErrorIcon";

export const InputHint = ({ errors, inputFill, active, rules }: InputHintI) => {
  const InputLettersCount =
    50 - inputFill.length >= 0 ? 50 - inputFill.length : 0;

  return (
    <>
      {errors ? (
        <div className="form__error">
          <ErrorIcon className={"form__input-error"} />
          <p>{errors ?? ""}</p>
        </div>
      ) : (
        rules &&
        active && (
          <div>
            {inputFill.length !== 0 && (
              <div className="form__input-hint">{`${InputLettersCount}/50`}</div>
            )}
          </div>
        )
      )}
    </>
  );
};
