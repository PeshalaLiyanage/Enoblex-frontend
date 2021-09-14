export default {
  setPageTitle: (state, payload) => {
    state.pageTitle = payload;
  },
  setConsultationEditOpen: (state, payload) => {
    state.consultations.dialogControllers.consultationEditOpen = payload;
  },
  setSelectedConsultationData: (state, payload) => {
    state.consultations.dialogData.selectedConsultationData = {
      ...state.consultations.dialogData.selectedConsultationData,
      ...payload,
    };
  },
  setUpdatedConsultationData: (state, payload) => {
    state.consultations.consultationRecords = state.consultations.consultationRecords.map(
      (oldData) => {
        if (oldData.id === payload.id) {
          return payload;
        }
        return oldData;
      }
    );
  },
  setSelectedConsultationDataToDefault: (state) => {
    state.consultations.dialogData.selectedConsultationData = {
      id: '',
      cName: '',
      type: '',
      date: new Date().toISOString().substr(0, 10),
      description: '',
      status: 'Pending',
    };
  },
  setConsultationDeleteConfirmationOpen: (state, payload) => {
    state.consultations.dialogControllers.conDeleteConfirmationOpen = payload;
  },
  deleteConsultationData: (state, payload) => {
    state.consultations.consultationRecords = state.consultations.consultationRecords.filter(
      (data) => data.id !== payload.id
    );
  },
  setNotification: (state, payload) => {
    state.common.notification = {
      open: true,
      color: payload.status === 'error' ? 'error' : 'success',
      text: payload.text,
    };
  },
  setNotificationToDefault: (state) => {
    state.common.notification = {
      open: false,
      color: '',
      text: '',
    };
  },
  setLoading: (state, payload) => {
    state.common.isLoading = payload;
  },
};
