import { toast } from 'react-toastify';
import { getErrorMessage } from '../utils/getErrorMessage';

export default class Notification {
  static success(message, config) {
    console.log('Notification:', message);
    return toast.success(message, config);
  }

  static error(message, config) {
    if (message instanceof Error) {
      message = getErrorMessage(message);
    }

    console.error('Notification:', message);
    return toast.error(message || 'Something went wrong', config);
  }

  static info(message, config) {
    console.log('Notification:', message);
    return toast.info(message, config);
  }

  static closeAll() {
    toast.dismiss();
  }

  static close(id) {
    toast.dismiss(id);
  }
}
