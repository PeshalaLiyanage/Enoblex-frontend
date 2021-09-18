import apiEndpoints from '../utilities/apiEndpoints';
import httpService from './http.service';
import authUtilities from '../utilities/auth.utilities';

const login = (params) =>
  new Promise((resolve, reject) => {
    httpService
      .post(apiEndpoints.auth.login, params, {})
      .then((res) => {
        authUtilities.setAccessToken(res.data.token);
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });

const getUserData = () =>
  new Promise((resolve, reject) => {
    httpService
      .get(apiEndpoints.auth.getUser)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });

export default {
  login,
  getUserData,
};
