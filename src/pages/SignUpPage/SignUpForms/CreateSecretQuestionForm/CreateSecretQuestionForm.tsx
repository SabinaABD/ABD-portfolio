import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import '../form.styles.scss'

import { questions } from "./CreateSecurityQuestion.constants";
import {validation} from "../../SignUpPage.validation";
import {FormPropI} from "../../SignUpPage.types";
import {FormInput} from "../../../../components/Inputs/FormInput/FormInput";
import {DropDownIcon} from "../../../../components/Icons/DropDownIcon";

export const CreateSecurityQuestion = ({ nextStep }: Partial<FormPropI>) => {
  const [list, setList] = useState<boolean>(false);
  const [placeHolder, setPlaceHolder] = useState("Choose security question");

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const handleShowBtn = () => {
    setList(!list);
  };

  useEffect(() => {
    reset({});
  }, [placeHolder]);

  const onSubmit = (data: any) => {
    if (nextStep) {
      nextStep();
    }
  };

  const handlePickItem = (name: any) => {
    setPlaceHolder(name.target.innerHTML);
  };

  const questionList = (
    <div className="form__selector-list">
      {questions.map((elem, index) => (
        <div
          key={index}
          className="form__selector-list-item"
          onClick={(elem) => handlePickItem(elem)}>
          {elem}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__input" onClick={handleShowBtn}>
            <div className="form__selector">{placeHolder}</div>
            <DropDownIcon className="form__selector-btn" />
            {list && questionList}
          </div>
          {placeHolder === "Add your own question" && (
            <FormInput
              validation={register("secretQuestion", validation.secretQuestion)}
              errors={errors.secretQuestion}
              label="Enter your security question"
              rules={validation.secretQuestion.rule}
            />
          )}
          <FormInput
            validation={register(
              "secretAnswer",
              validation.secretQuestionAnswer
            )}
            errors={errors.secretAnswer}
            label="Enter your security answer"
            rules={validation.secretQuestionAnswer.rule}
          />
          <button
            className="form__btn"
            type="submit"
            disabled={!isValid || placeHolder === "Choose security question"}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
