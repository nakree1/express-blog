const getStatus = (state) => state.signUp.status;
const getInput = (state) => state.signUp.input;
const getErrors = (state) => state.signUp.errors;

export const signUpSelectors = {
  getStatus,
  getInput,
  getErrors
};
