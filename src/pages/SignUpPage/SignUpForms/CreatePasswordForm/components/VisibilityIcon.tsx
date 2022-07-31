import {ErrorIcon} from "../../../../../components/Icons/ErrorIcon";
import {Visibility} from "../../../../../components/Icons/Visibility";
import {VisibilityOff} from "../../../../../components/Icons/VisibilityOff";

export interface IVisibility {
  errors?: object;
  visibility?: boolean;
  onClick?: () => void;
}

export const VisibilityIcon = ({
  errors,
  onClick,
  visibility,
}: IVisibility) => {
  return (
    <div className="form__hide-btn" onClick={onClick}>
      {errors ? <ErrorIcon /> : visibility ? <Visibility /> : <VisibilityOff />}
    </div>
  );
};
