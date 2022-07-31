export interface SubmittedDataI {
  email: string;
  token: string;
  personalDataFirstName: string;
  personalDataLastName: string;
  personalDataID: string;
  password: string;
  secretQuestion: string;
  secretQuestionAnswer: string;
}

export interface FormPropI {
  nextStep: () => void;
}
