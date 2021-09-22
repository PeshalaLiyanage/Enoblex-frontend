<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="username"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': submitted && !username }"
        />
        <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && !password }"
        />
        <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import authService from '../services/auth.service'
export default {
  data() {
    return {
      username: 'enoblex@99x.io',
      password: '123456789',
      submitted: false,
    };
  },
  computed: {},
  created() {
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      authService._login();
      this.$router.push('/todo');
    },
  },
};
</script>
<style>
.login{
  text-align: center;
  background: #a2e8c9;
  height: 200px;
  margin: 10% auto auto auto;
  width: 50%;

}

input{
  margin-left: 50px;
}
button{
  margin-top: 30px;
  width: 100px;
  background: #11a72b;
  color: #e8f7f0;
  height: 30px;
}
</style>