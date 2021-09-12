<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Delete Consultation</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <span class="subheading"
              >You are going to delete this record permanently. Do you want to delete it?</span
            >
          </v-container>
          <v-card-actions>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="primary" @click="deleteRecord">Delete</v-btn>
            </v-row>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import moment from 'moment';
export default {
  name: 'ConsultationDeleteConfirmationComponent',
  data: () => ({}),
  computed: {
    dialog: {
      get() {
        return this.$store.state.dashboard.consultations.dialogControllers
          .conDeleteConfirmationOpen;
      },
      set(value) {
        this.$store.commit('dashboard/setConsultationDeleteConfirmationOpen', value);
      },
    },
    consultationData() {
      return this.$store.state.dashboard.consultations.dialogData.selectedConsultationData;
    },
  },
  methods: {
    deleteRecord() {
      this.$store.commit('dashboard/deleteConsultationData', this.consultationData);
      this.$store.commit('dashboard/setConsultationDeleteConfirmationOpen', false);
      this.$store.commit('dashboard/setNotification', {
        status: 'success',
        text: 'Consultation Successfully Deleted.',
      });
    },
  },
};
</script>

<style scoped></style>
