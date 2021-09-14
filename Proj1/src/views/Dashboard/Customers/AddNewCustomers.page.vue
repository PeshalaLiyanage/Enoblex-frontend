<template>
  <fragment>
    <add-customers-component />
  </fragment>
</template>

<script>
import AddCustomersComponent from '../../../components/customers/AddCustomers.component';

export default {
  name: 'AddNewCustomersPage',
  components: {
    AddCustomersComponent,
  },
};
</script>

<style scoped></style>
