import { useState } from "react";

import { steps } from "./SignUpPage.constants";
import { CongratulationPage } from "./SignUpForms/CongratulationsPage/CongratulationsPage";
import {Stepper} from "../../components/Stepper/Stepper";

export const SignUpPage = () => {
  const [finished, setFinished] = useState(false);
  const registrationIsFinished = () => {
    setFinished(true);
  };

  return (
    <article className="signup-page">
      {finished ? (
        <CongratulationPage />
      ) : (
        <>
          <h1>Sign up</h1>
          <Stepper
              onFinish={registrationIsFinished}
              currentStep={0}
              stepsList={steps}
          />
        </>
      )}
    </article>
  );
};
