<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Edit Consultation</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <ValidationObserver ref="observer">
              <form>
                <v-row>
                  <v-col xs="12" md="6" lg="6">
                    <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
                      <v-text-field
                        v-model="name"
                        :error-messages="errors"
                        label="Customer Name *"
                        required
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col xs="12" md="6" lg="6">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Consultation Type"
                      rules="required"
                    >
                      <v-select
                        v-model="consultationType"
                        :items="consultationTypes"
                        :error-messages="errors"
                        label="Consultation Type *"
                        required
                      ></v-select>
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col xs="12" md="6" lg="6">
                    <ValidationProvider v-slot="{ errors }" name="Description" rules="required">
                      <v-text-field
                        v-model="description"
                        :error-messages="errors"
                        label="Description *"
                        required
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col xs="12" md="6" lg="6">
                    <ValidationProvider v-slot="{ errors }" name="Status" rules="required">
                      <v-select
                        v-model="status"
                        :items="statusTypes"
                        :error-messages="errors"
                        label="Status *"
                        required
                      ></v-select>
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col xs="12" md="6" lg="6">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="consultationDate"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="consultationDate"
                          label="Consultation Date"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="consultationDate" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(consultationDate)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </form>
            </ValidationObserver>
          </v-container>
          <v-card-actions>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="primary" @click="submit">Save</v-btn>
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
  name: 'ConsultationEditComponent',
  data: () => ({
    name: '',
    consultationType: '',
    consultationTypes: ['Law', 'Medical'],
    status: null,
    statusTypes: ['Pending', 'Admin Approved', 'Customer Approved', 'Consultation Completed'],
    description: '',
    consultationDate: moment().format('DD-MM-YYYY'),
    id: 0,
    menu: false,
  }),
  computed: {
    dialog: {
      get() {
        return this.$store.state.dashboard.consultations.dialogControllers.consultationEditOpen;
      },
      set(value) {
        this.$refs.observer.reset();
        this.$store.commit('dashboard/setConsultationEditOpen', value);
        this.$store.commit('dashboard/setSelectedConsultationDataToDefault');
      },
    },
    consultationData() {
      return this.$store.state.dashboard.consultations.dialogData.selectedConsultationData;
    },
  },
  watch: {
    consultationData(value) {
      this.name = value.cName;
      this.consultationType = value.type;
      this.status = value.status;
      this.description = value.description;
      this.id = value.id;
      this.consultationDate = new Date(value.date).toISOString().substr(0, 10);
    },
  },
  methods: {
    async submit() {
      const a = await this.$refs.observer.validate();
      const data = {
        id: this.id,
        cName: this.name,
        type: this.consultationType,
        date: this.consultationDate,
        description: this.description,
        status: this.status,
      };
      this.$store.commit('dashboard/setUpdatedConsultationData', data);
      this.$store.commit('dashboard/setConsultationEditOpen', false);
      this.$store.commit('dashboard/setNotification', {
        status: 'success',
        text: 'Consultation Successfully Updated',
      });
    },
  },
};
</script>

<style scoped></style>
