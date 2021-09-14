<template>
  <v-container class="cardContent">
    <data-table
      title="All Customers"
      :headers="headers"
      :records="records"
      :is-loading="false"
      :total-items="5"
    />
  </v-container>
</template>

<script>
import DataTable from '../tables/DataTable.component';
export default {
  name: 'AllCustomersComponent',
  components: {
    DataTable,
  },
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Contact No', value: 'contactNo' },
        { text: 'Address', value: 'address' },
      ],
      records: [
        { name: 'Jane', email: 'jane@gmail.com', contactNo: '01187945155', address: 'London' },
        {
          name: 'Watson',
          email: 'watson@gmail.com',
          contactNo: '02287945155',
          address: 'Australia',
        },
        { name: 'Khan', email: 'khan@gmail.com', contactNo: '02245212100', address: 'London' },
        { name: 'Josh', email: 'josh@gmail.com', contactNo: '05584545487', address: 'US' },
        { name: 'Kane', email: 'kane@gmail.com', contactNo: '01178470001', address: 'London' },
      ],
    };
  },
};
</script>

<style scoped>
.cardContent {
  padding: 15px;
  margin-top: 22px;
}
</style>
