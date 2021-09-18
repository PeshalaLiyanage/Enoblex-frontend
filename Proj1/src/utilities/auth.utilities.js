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
};
