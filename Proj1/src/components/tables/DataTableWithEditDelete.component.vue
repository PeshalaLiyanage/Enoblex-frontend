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
            <template v-slot:item="row">
              <tr>
                <td
                  v-for="data in getTableData(row.item)"
                  :key="data[Object.keys(data)[0]] + Math.random()"
                >
                  {{ data }}
                </td>
                <td>
                  <v-btn icon small @click="openEditDialog(row.item)">
                    <v-icon dark color="gray">mdi-pencil</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn icon small @click="openDeleteDialog(row.item)">
                    <v-icon dark color="gray">mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card></template
>

<script>
export default {
  name: 'DataTableWithEditDeleteComponent',
  props: {
    title: String,
    headers: Array,
    records: Array,
    isLoading: Boolean,
    totalItems: Number,
  },
  methods: {
    openEditDialog(data) {
      this.$emit('edit-dialog-open', data);
    },
    openDeleteDialog(data) {
      this.$emit('delete-dialog-open', data);
    },
    getTableData(tableRow) {
      const _tableRow = JSON.parse(JSON.stringify(tableRow));
      delete _tableRow.id;
      return _tableRow;
    },
  },
};
</script>

<style scoped>
.cardContent {
  padding: 20px;
}
</style>
