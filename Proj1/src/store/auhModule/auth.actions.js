import authService from '../../services/auth.service';
import authUtilities from '../../utilities/auth.utilities';

const login = ({ commit, dispatch }, { email, password }) => {
  return new Promise((resolve, reject) => {
    commit('loginRequest');
    authService
      .login({ email, password })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {
  login,
};
