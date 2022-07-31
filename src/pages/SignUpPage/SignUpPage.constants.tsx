import { CreatePasswordForm } from "./SignUpForms/CreatePasswordForm/CreatePasswordForm";
import { CreateSecurityQuestion } from "./SignUpForms/CreateSecretQuestionForm/CreateSecretQuestionForm";
import { PersonalDataForm } from "./SignUpForms/PesonalDataForm/PersonalDataForm";
import {EnterCodeForm} from "./SignUpForms/EnterCodeForm/EnterCodeForm";
import './SignUpForms/form.styles.scss'

export const steps = [
  {
    id: 0,
    label: "Enter code",
    content: EnterCodeForm,
  },
  {
    id: 1,
    label: "Personal data",
    content: PersonalDataForm,
  },
  {
    id: 2,
    label: "Create password",
    content: CreatePasswordForm,
  },
  {
    id: 3,
    label: "Security question",
    content: CreateSecurityQuestion,
  },
];
