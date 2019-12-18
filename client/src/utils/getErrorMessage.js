export function getErrorMessage(err) {
  try {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }

    return err.message;
  } catch (e) {
    return '';
  }
}
