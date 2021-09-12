<template>
  <v-container>
    <v-row>
      <v-col xs="12" md="4" lg="4">
        <home-summary-card-component
          title="Today Appointments"
          value="5"
          icon="mdi-calendar-today"
        />
      </v-col>
      <v-col xs="12" md="4" lg="4">
        <home-summary-card-component
          title="Pending Appointments"
          value="20"
          icon="mdi-calendar-text-outline"
        />
      </v-col>
      <v-col xs="12" md="4" lg="4">
        <home-summary-card-component title="Total Customers" value="100" icon="mdi-account-group" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeSummaryCardComponent from './HomeSummaryCard.component';

export default {
  name: 'homeSummaryComponent',
  components: { HomeSummaryCardComponent },
};
</script>

<style scoped></style>
