export const EMAIL_FIELD_NAME = "email";

export const EMAIL_VALIDATION = {
  required: {
    value: true,
    message: "This field is required",
  },
  minLength: 1,
  maxLength: {
    value: 50,
    message: "Invalid email address",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    message: "Invalid characters",
  },
};
