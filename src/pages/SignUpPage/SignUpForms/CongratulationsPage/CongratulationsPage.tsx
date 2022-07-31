
import "./congratulation.style.scss";
import {CongratsIcon} from "../../../../components/Icons/CongratsIcon";

export const CongratulationPage = () => {

  return (
    <div className="congrats">
      <div className="congrats__title">Congrats!</div>
      <div className="congrats__subtitle">
        You have successfully signed up!
      </div>
      <div className="congrats__icon">
        <CongratsIcon />
      </div>
      <button className="congrats__btn">
        Continue
      </button>
    </div>
  );
};
