<template>
  <v-main class="bg-login">
    <ValidationObserver ref="observer">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6" md="6" lg="3">
            <v-card class="elevation-1">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <h3 class="login-header my-3">
                      Login to DoctorB
                    </h3>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-form class="mx-5 my-3">
                      <ValidationProvider v-slot="{ errors }" name="Email" rules="required">
                        <v-text-field
                          label="Email"
                          name="email"
                          type="text"
                          v-model="email"
                          :error-messages="errors"
                        />
                      </ValidationProvider>
                      <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
                        <v-text-field
                          id="password"
                          label="Password"
                          name="password"
                          type="password"
                          v-model="password"
                          :error-messages="errors"
                          @keyup.enter="handleSubmit"
                        />
                      </ValidationProvider>
                    </v-form>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="10">
                    <v-btn
                      color="primary"
                      class="mb-3"
                      block
                      @click="handleSubmit"
                      :loading="isLoading"
                      >Login</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </ValidationObserver>
  </v-main>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.dashboard.common.isLoading;
    },
  },
  methods: {
    async handleSubmit(e) {
      const isValidated = await this.$refs.observer.validate();
      if (!isValidated) {
        return;
      }
      e.preventDefault();
      this.$store.commit('dashboard/setLoading', true);
//
      this.$store.commit('dashboard/setLoading', false);
      this.$router.push('/dashboard');
      // this.$store
      //   .dispatch('auth/login', {
      //     email: this.email,
      //     password: this.password,
      //   })
      //   .then(() => {
      //     this.$router.push('/dashboard');
      //     this.$store.commit('dashboard/setLoading', false);
      //   })
      //   .catch(() => {
      //     this.$store.commit('dashboard/setNotification', {
      //       status: 'error',
      //       text: 'Login Failed!',
      //     });
      //     this.$store.commit('dashboard/setLoading', false);
      //   });
    },
  },
};
</script>

<style scoped>
.bg-login {
  background: linear-gradient(180deg, #6699ff 0%, #1a66ff 100%);
}
.login-header {
  text-align: center;
  color: #424242;
}
</style>
