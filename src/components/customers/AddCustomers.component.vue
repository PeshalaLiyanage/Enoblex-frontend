<template>
  <v-container>
    <ValidationObserver ref="observer">
      <form>
        <v-card>
          <v-container class="cardContent">
            <v-row>
              <v-col xs="12" md="6" lg="6">
                <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
                  <v-text-field
                    v-model="name"
                    :error-messages="errors"
                    label="Full Name *"
                    required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" md="6" lg="6">
                <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="E-mail *"
                    required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col xs="12" md="6" lg="6">
                <ValidationProvider v-slot="{ errors }" name="Phone Number" rules="required">
                  <v-text-field
                    v-model="phoneNumber"
                    :error-messages="errors"
                    label="Phone Number *"
                    required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" md="6" lg="6">
                <ValidationProvider v-slot="{ errors }" name="Address" rules="required">
                  <v-text-field
                    v-model="address"
                    :error-messages="errors"
                    label="Address"
                    required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col xs="12" md="6" lg="6">
                <ValidationProvider v-slot="{ errors }" name="User Type" rules="required">
                  <v-select
                    v-model="userType"
                    :items="userTypes"
                    :error-messages="errors"
                    label="User Type"
                    required
                  ></v-select>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" md="6" lg="6">
                <ValidationProvider v-slot="{ errors }" name="User Name" rules="required">
                  <v-text-field
                    v-model="userName"
                    :error-messages="errors"
                    label="User Name *"
                    required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col xs="12" md="6" lg="6">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Password"
                  rules="required|passwordConfirmation:@Password Confirmation"
                >
                  <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    label="Password *"
                    type="password"
                    required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" md="6" lg="6">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Password Confirmation"
                  rules="required"
                >
                  <v-text-field
                    v-model="confirmedPassword"
                    :error-messages="errors"
                    label="Confirm Password *"
                    required
                    type="password"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row v-if="userType === 'Consultant'">
              <v-col xs="12" md="6" lg="6">
                <v-row>
                  <v-col xs="12" md="6" lg="6" class="alignItemsCenter">
                    <div class="transition-swing">Consultant Type :</div>
                  </v-col>
                  <v-col xs="6" md="3" lg="3">
                    <ValidationProvider v-slot="{ errors }" name="Law">
                      <v-checkbox
                        v-model="consultantType"
                        :error-messages="errors"
                        value="law"
                        label="Law"
                        type="checkbox"
                      ></v-checkbox>
                    </ValidationProvider>
                  </v-col>
                  <v-col xs="6" md="3" lg="3">
                    <ValidationProvider v-slot="{ errors }" name="Medicine">
                      <v-checkbox
                        v-model="consultantType"
                        :error-messages="errors"
                        value="medicine"
                        label="Medicine"
                        type="checkbox"
                      ></v-checkbox>
                    </ValidationProvider>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row v-if="userType === 'Agent'">
              <v-col xs="12" md="6" lg="6">
                <ValidationProvider v-slot="{ errors }" name="User Name" rules="required">
                  <v-radio-group v-model="primaryAgent" :mandatory="false" :error-messages="errors">
                    <v-row>
                      <v-col xs="12" md="6" lg="6">
                        <div class="transition-swing ">Primary Agent :</div>
                      </v-col>
                      <v-col xs="6" md="3" lg="3">
                        <v-radio label="Yes" :value="true"></v-radio>
                      </v-col>
                      <v-col xs="6" md="3" lg="3">
                        <v-radio label="No" :value="false"></v-radio>
                      </v-col>
                    </v-row>
                  </v-radio-group>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" md="6" lg="6">
                <ValidationProvider v-slot="{ errors }" name="District" rules="required">
                  <v-select
                    v-model="district"
                    :items="districts"
                    :error-messages="errors"
                    label="District"
                    required
                  ></v-select>
                </ValidationProvider>
              </v-col>
            </v-row>

            <v-card-actions>
              <v-row>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="clear">clear</v-btn>
                <v-btn color="primary" @click="submit">Add</v-btn>
              </v-row>
            </v-card-actions>
          </v-container>
        </v-card>
      </form>
    </ValidationObserver>
  </v-container>
</template>

<script>
export default {
  name: 'AddCustomersComponent',
  data: () => ({
    name: '',
    email: '',
    select: null,
    userTypes: ['Agent', 'Consultant', 'Customer'],
    districts: [
      'Jaffna',
      'Kilinochchi',
      'Mannar',
      'Mullaitivu',
      'Vavuniya',
      'Puttalam',
      'Kurunegala',
      'Gampaha',
      'Colombo',
      'Kalutara',
      'Anuradhapura',
      'Polonnaruwa',
      'Matale',
      'Kandy',
      'Nuwara Eliya',
      'Kegalle',
      'Ratnapura\t',
      'Trincomalee',
      'Batticaloa',
      'Ampara',
      'Badulla',
      'Monaragala',
      'Hambantota',
      'Matara',
      'Galle',
    ],
    checkbox: null,
    phoneNumber: '',
    address: '',
    password: '',
    confirmedPassword: '',
    userType: '',
    userName: '',
    consultantType: [],
    district: '',
    primaryAgent: false,
  }),
  mounted() {
    this.sortArrays();
  },

  methods: {
    async submit() {
      const a = await this.$refs.observer.validate();
    },
    clear() {
      this.name = '';
      this.email = '';
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
    sortArrays() {
      this.districts.sort();
    },
  },
};
</script>

<style scoped>
.cardContent {
  padding: 15px;
  margin-top: 22px;
}
.alignItemsCenter {
  align-items: center;
  display: flex;
}
</style>
