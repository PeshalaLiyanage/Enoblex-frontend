<template>
  <v-container class="cardContent">
    <data-table-with-buttons
      title="All Consultations"
      :headers="headers"
      :records="records"
      :is-loading="false"
      :total-items="5"
      @edit-dialog-open="openEditDialog"
      @delete-dialog-open="openDeleteDialog"
    />
  </v-container>
</template>

<script>
import DataTableWithButtons from '../tables/DataTableWithEditDelete.component';
export default {
  name: 'AllConsultationsComponent',
  components: {
    DataTableWithButtons,
  },
  data() {
    return {
      headers: [
        { text: 'Customer Name', value: 'cName' },
        { text: 'Consultation Type', value: 'type' },
        { text: 'Date', value: 'date' },
        { text: 'Description', value: 'description' },
        { text: 'Status', value: 'status' },
        { text: '', value: 'edit' },
        { text: '', value: 'delete' },
      ],
    };
  },
  computed: {
    records() {
      return this.$store.state.dashboard.consultations.consultationRecords;
    },
  },
  methods: {
    openEditDialog(data) {
      this.$store.commit('dashboard/setSelectedConsultationData', data);
      this.$store.commit('dashboard/setConsultationEditOpen', true);
    },
    openDeleteDialog(data){
      this.$store.commit('dashboard/setSelectedConsultationData', data);
      this.$store.commit('dashboard/setConsultationDeleteConfirmationOpen', true);
    }
  },
};
</script>

<style scoped>
.cardContent {
  padding: 15px;
  margin-top: 22px;
}
</style>
