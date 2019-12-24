import api from './api';

export default class UserService {
  static getProfile() {
    return api.get(`/account/profile`);
  }
}
