export default {
  loginRequest: (state) => {
    state.loggingIn = true;
  },
  loginSuccess: (state, payload) => {
    state.loggedIn = true;
    state.loggingIn = false;
    state.user = payload;
  },
};
