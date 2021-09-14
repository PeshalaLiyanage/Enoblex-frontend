import axios from 'axios';
import router from '../router';
import authUtilities from '../utilities/auth.utilities';

axios.defaults.timeout = 600000;

const httpService = (headers) => {
  const service = axios.create({
    // baseURL: '/api/',
    timeout: 600000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  });
  service.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error.response.status === 401 ||
        error.response.status === 403 ||
        error.response.status === 400 // TODO need to change this to 401 in the API
      ) {
        authUtilities.removeAccessToken();
        if (router.currentRoute.path !== '/login') {
          router.push('/login').then((r) => {});
        }
      }
      return error;
    }
  );
  return service;
};

const errorStatus = (err) => {
  return {
    status: 0,
    statusCode: err && err.response ? err.response.statusCode : 0,
    error: err && err.response && err.response.data ? err.response.data.error : 0,
    errorDescription: err && err.response && err.response.data ? err.response.data.message : '',
  };
};

const get = (url, headerData) => {
  return new Promise((resolve, reject) => {
    const token = authUtilities.getAccessToken();
    const headers = {
      Authorization: token ? `Bearer ${token}` : '',
      ...headerData,
    };
    httpService(headers)
      .get(url)
      .then((res) => resolve(res))
      .catch((e) => reject(errorStatus(e)));
  });
};

const post = (url, params, headerData) => {
  return new Promise((resolve, reject) => {
    const token = authUtilities.getAccessToken();
    const headers = {
      Authorization: token ? `Bearer ${token}` : '',
      ...headerData,
    };
    httpService(headers)
      .post(url, params)
      .then((res) => resolve(res))
      .catch((e) => reject(errorStatus(e)));
  });
};

export default {
  get,
  post,
};
