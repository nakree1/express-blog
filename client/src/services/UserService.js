import api from './api';

export default class UserService {
  static getProfile() {
    return api.get(`/account/profile`);
  }

  static updateProfile(data) {
    return api.put(`/account/profile`, data);
  }

  static deleteProfile() {
    return api.delete(`/account/profile`);
  }

  static uploadAvatar(data) {
    return api.put(`/account/upload-avatar`, data);
  }
}
