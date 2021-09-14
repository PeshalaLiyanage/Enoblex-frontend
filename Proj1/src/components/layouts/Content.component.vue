<template>
  <v-main class="body">
    <div class="ma-3">
      <router-view />
    </div>
  </v-main>
</template>

<script>
export default {
  name: 'ContentComponent',
};
</script>

<style scoped>
.body {
  min-height: 99vh;
}
</style>
