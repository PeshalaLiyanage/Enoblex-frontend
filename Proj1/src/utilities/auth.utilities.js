import authService from '../services/auth.service';

export default {
  setAccessToken: (accessToken) => {
    localStorage.setItem('access_token', accessToken);
  },
  getAccessToken: () => {
    return localStorage.getItem('access_token');
  },
  removeAccessToken: () => {
    localStorage.removeItem('access_token');
  },
  getUserData: () => {
    return new Promise((resolve, reject) => {
      authService
        .getUserData()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
