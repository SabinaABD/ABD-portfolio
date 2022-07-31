export const validation = {
  passwordValidation: {
    required: true,
    minLength: 6,
    maxLength: 20,
    pattern:
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,20}/g,
  },

  secretQuestion: {
    required: true,
    minLength: 1,
    maxLength: {
      value: 50,
      message: "Security question must be less than 50 characters",
    },
    pattern: {
      value: /.{1,50}/gm,
      message: "Invalid characters",
    },
    rule: 'Question must be no longer than 50 characters, may include lowercase and capital letters, numbers and special characters (space " # * + %)',
  },

  secretQuestionAnswer: {
    required: true,
    minLength: 1,
    maxLength: {
      value: 50,
      message: "Security answer must be less than 50 characters",
    },
    pattern: {
      value: /.{1,50}/gm,
      message: "Invalid characters",
    },
    rule: 'Answer must be no longer than 50 characters, may include lowercase and capital letters, numbers and special characters (space " # * + %)',
  },

  personalDataFirstName: {
    required: true,
    minLength: {
      value: 3,
      message: "Not enough characters",
    },
    maxLength: 50,
    pattern: {
      value: /.{1,50}/gm,
      message: "Invalid characters",
    },
  },

  personalDataLastName: {
    required: true,
    minLength: {
      value: 3,
      message: "Not enough characters",
    },
    maxLength: 50,
    pattern: {
      value: /.{1,50}/gm,
      message: "Invalid characters",
    },
  },

  personalDataID: {
    required: true,
    minLength: {
      value: 3,
      message: "Not enough characters",
    },
    maxLength: 50,
    pattern: {
      value: /.{1,50}/gm,
      message: "Invalid characters",
    },
  },
};
