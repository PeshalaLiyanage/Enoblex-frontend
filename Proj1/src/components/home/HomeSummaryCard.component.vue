<template>
  <v-card class="mx-auto" :loading="isLoading">
    <v-list-item three-line class="px-4 py-3">
      <v-list-item-content>
        <div class="body-2 mb-0 mt-1 grey--text">
          <span class="mr-1">{{ title }}</span>
        </div>
        <v-list-item-title :class="'headline my-2 ' + className">{{ value }}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-avatar tile size="70" class="avatar-icon">
        <v-icon x-large color="#6699ff">{{ icon }}</v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'homeSummaryCardComponent',
  props: {
    title: String,
    icon: String,
    isLoading: Boolean,
    className: String,
    value: String,
  },
};
</script>

<style scoped>
.avatar-icon {
  border-radius: 50%;
  /*background-color: #6699ff;*/
}
</style>
