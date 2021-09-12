<template>
  <fragment>
    <all-consultations />
    <consultation-edit-popup />
    <consultation-delete-confirmation-popup />
  </fragment>
</template>

<script>
import AllConsultations from '../../../components/consultations/AllConsultations.component.vue';
import ConsultationEditPopup from '../../../components/consultations/popups/ConsultationEdit.component';
import ConsultationDeleteConfirmationPopup from '../../../components/consultations/popups/ConsultationDeleteConfirmation.component';

export default {
  name: 'AllConsultationsPage',
  components: {
    AllConsultations,
    ConsultationEditPopup,
    ConsultationDeleteConfirmationPopup,
  },
};
</script>

<style scoped></style>
