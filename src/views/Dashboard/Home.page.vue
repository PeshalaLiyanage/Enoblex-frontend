<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <home-summary />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeSummary from '../../components/home/HomeSummary.component';
export default {
  name: 'HomePage',
  components: {
    HomeSummary,
  },
};
</script>

<style scoped></style>
