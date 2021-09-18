import axios from 'axios';
import router from '../router';
import authUtilities from '../utilities/auth.utilities';

axios.defaults.timeout = 600000;

const httpService = (headerData) => {
  const token = authUtilities.getAccessToken();
  const headers = {
    Authorization: token ? `Bearer ${token}` : '',
    ...headerData,
  };
  const service = axios.create({
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
      if (error.response.status === 401) {
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
    statusCode: err && err.response ? err.response.statusCode : 0,
    error: err && err.response && err.response.data ? err.response.data.message : '',
  };
};

const get = (url, headerData) => {
  return new Promise((resolve, reject) => {
    httpService(headerData)
      .get(url)
      .then((res) => resolve(res))
      .catch((e) => reject(errorStatus(e)));
  });
};

const post = (url, params, headerData) => {
  return new Promise((resolve, reject) => {
    httpService(headerData)
      .post(url, params)
      .then((res) => resolve(res))
      .catch((e) => reject(errorStatus(e)));
  });
};

const del = (url, headerData) => {
  return new Promise((resolve, reject) => {
    httpService(headerData)
      .delete(url)
      .then((res) => res)
      .catch((e) => errorStatus(e));
  });
};

export default {
  get,
  post,
  delete: del,
};
