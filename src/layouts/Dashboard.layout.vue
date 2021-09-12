<template>
  <fragment>
    <app-bar-component />
    <nav-drawer-component />
    <content-component />
  </fragment>
</template>

<script>
import AppBarComponent from '../components/layouts/AppBar.component';
import NavDrawerComponent from '../components/layouts/NavDrawer.component';
import ContentComponent from '../components/layouts/Content.component';
import authUtilities from '../utilities/auth.utilities';
export default {
  name: 'DashboardLayout',
  components: {
    AppBarComponent,
    NavDrawerComponent,
    ContentComponent,
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      authUtilities
        .getUserData()
        .then((user) => {
          this.$store.commit('auth/loginSuccess', user);
        })
        .catch(() => {
          this.$store.commit('dashboard/setNotification', {
            status: 'error',
            text: 'User Data Fetching Failed!',
          });
        });
    },
  },
};
</script>

<style scoped></style>
