<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      :mini-variant-width="80"
      class="drawer"
      app
      permanent
      dark
    >
      <template v-slot:prepend>
        <v-list-item v-if="mini">
          <v-list-item-action>
            <v-btn icon @click="handleCollapse">
              <v-icon color="white">mdi-menu</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-list-item v-if="!mini">
          <v-list-item-content>
            <v-list-item-title class="title">
              <h2 class="my-3 ml-2">DoctorB</h2>
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="handleCollapse">
              <v-icon color="white">mdi-menu</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="../../../assest/images/userAvatar.png" />
          </v-list-item-avatar>

          <v-list-item-content v-if="user">
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ user.mobile_number }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-content v-else>
            <v-list-item-title>Loading..</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider />
      <v-list-item link to="/dashboard" exact class="my-3" @click="setPageTitle('Home')">
        <v-list-item-action>
          <v-icon color="gray">mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group :value="false" class="nav-menu">
        <template v-slot:prependIcon>
          <v-icon color="gray">mdi-account-multiple</v-icon>
        </template>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Customers</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          link
          to="/dashboard/customers/all-customers"
          exact
          @click="setPageTitle('Customers')"
        >
          <v-list-item-content class="sub-menu-item">
            <v-list-item-title>All Customers</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="/dashboard/customers/add-customers"
          @click="setPageTitle('Add Customers')"
        >
          <v-list-item-content class="sub-menu-item">
            <v-list-item-title>Add Customers</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-group :value="false" class="nav-menu">
        <template v-slot:prependIcon>
          <v-icon color="gray">mdi-view-list</v-icon>
        </template>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Consultations</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          link
          to="/dashboard/consultations/all-consultations"
          exact
          @click="setPageTitle('Consultations')"
        >
          <v-list-item-content class="sub-menu-item">
            <v-list-item-title>Consultations</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'NavDrawerComponent',
  data() {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      drawer: true,
      mini: false,
    };
  },
  methods: {
    handleCollapse() {
      this.mini = !this.mini;
    },
    setPageTitle(title) {
      this.$store.commit('dashboard/setPageTitle', title);
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>
.drawer {
  background: #6699ff;
  background: linear-gradient(180deg, #6699ff 0%, #1a66ff 100%);
}
.v-list-item--active {
  color: white !important;
}
.sub-menu-item {
  padding-left: 57px;
}
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 22px;
}
.v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
  font-size: 0.9rem;
}
.nav-menu {
  color: white !important;
}
</style>
