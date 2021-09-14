const nodeEnv = process.env.NODE_ENV;

const apiUrls = {
  local: {
    hostName: 'localhost',
    baseUrl: 'http://localhost:8000',
  },
  production: {
    hostName: 'api.doctorb.lk',
    baseUrl: 'https://api.doctorb.lk',
  },
};

const baseUrl =
  process.env.NODE_ENV === 'development' ? apiUrls.local.baseUrl : apiUrls.production.baseUrl;

export default {
  auth: {
    login: `${baseUrl}/api/login`,
    getUser: `${baseUrl}/api/user`,
  },
};
