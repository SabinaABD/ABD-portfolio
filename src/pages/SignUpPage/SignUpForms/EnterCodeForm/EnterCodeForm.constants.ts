import { milliseconds } from "date-fns";

export const CODE_VALID_DURATION = "10 minutes";

export const TIMER_MS = milliseconds({ seconds: 30 });

export const TIMER_MS_TO_ITERATE = 1000;

export const CODE_FIELD_NAME = "code";

export const CODE_VALIDATION = {
  required: {
    value: true,
    message: "This field is required",
  },
  maxLength: {
    value: 6,
    message: "Invalid code",
  },
  minLength: {
    value: 6,
    message: "Invalid code",
  },
};
