<template>
  <v-card class="cardContent">
    <v-card-title>
      <span>{{ title }}</span>
      <v-spacer />
    </v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-data-table
            :loading="isLoading"
            :headers="headers"
            :items="records"
            :server-items-length="totalItems"
          >
          </v-data-table>
        </v-col>
      </v-row>
    </v-container> </v-card
></template>

<script>
export default {
  name: 'DataTableComponent',
  props: {
    title: String,
    headers: Array,
    records: Array,
    isLoading: Boolean,
    totalItems: Number,
  },
};
</script>

<style scoped>
.cardContent {
  padding: 20px;
}
</style>
