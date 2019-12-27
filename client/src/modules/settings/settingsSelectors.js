const getProfile = (state) => state.settings.profile;
const getChangePassword = (state) => state.settings.changePassword;
const getChangeEmail = (state) => state.settings.changeEmail;

export const settingsSelectors = {
  getProfile,
  getChangePassword,
  getChangeEmail
};
