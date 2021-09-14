<template>
  <v-app>
    <router-view />
    <v-snackbar v-model="snackbarOpen" :timeout="2000" :color="notification.color" left dark>
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbarOpen = false">
          <v-icon light color="white" >mdi-close-thick</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    text: '',
    snackbarOpen: false,
  }),
  computed: {
    notification: {
      get() {
        return this.$store.state.dashboard.common.notification;
      },
      set() {
        this.$store.commit('dashboard/setNotificationToDefault');
      },
    },
  },
  watch: {
    notification(value) {
      if (value.open) {
        this.text = value.text;
        this.snackbarOpen = true;
      }
    },
  },
};
</script>
