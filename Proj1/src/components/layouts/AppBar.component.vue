<template>
  <fragment>
    <v-app-bar
      app
      color="#ffffff"
      elevation="0"
      hide-on-scroll
      height="75"
      absolute
      flat
      class="appBar"
    >
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="gray">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </fragment>
</template>

<script>
import authUtilities from '../../utilities/auth.utilities';
export default {
  name: 'AppBarComponent',
  computed: {
    pageTitle() {
      return this.$store.state.dashboard.pageTitle;
    },
  },
  methods: {
    logout() {
      authUtilities.removeAccessToken();
      this.$router.push('login');
    },
  },
};
</script>

<style scoped>
.appBar {
  border: #424242;
  background: #1a66ff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.19), 0 3px 4px rgba(0, 0, 0, 0.1) !important;
}
</style>
