const getSingUp = (state) => state.auth.signUp;
const getLogin = (state) => state.auth.login;

const isAuth = (state) => state.auth.isAuth;
const getProfile = (state) => state.auth.profile;

export const authSelectors = {
  getSingUp,
  getLogin,
  getProfile,

  isAuth
};
