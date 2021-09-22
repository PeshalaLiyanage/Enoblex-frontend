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

const _login = () => {
  authUtilities.setAccessToken(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  );
};

export default {
  login,
  _login,
};
