export default {
  pageTitle: 'Home',
  common: {
    notification: {
      open: false,
      color: '',
      text: '',
    },
    isLoading:false
  },
  consultations: {
    dialogControllers: {
      consultationEditOpen: false,
      conDeleteConfirmationOpen: false,
    },
    dialogData: {
      selectedConsultationData: {
        id: '',
        cName: '',
        type: '',
        date: new Date().toISOString().substr(0, 10),
        description: '',
        status: 'Pending',
      },
    },
    consultationRecords: [
      {
        id: 1,
        cName: 'Jane',
        type: 'Law',
        date: '2020-10-10',
        description: 'London',
        status: 'Pending',
      },
      {
        id: 2,
        cName: 'Watson',
        type: 'Law',
        date: '2020-10-10',
        description: 'Australia',
        status: 'Pending',
      },
      {
        id: 3,
        cName: 'Khan',
        type: 'Law',
        date: '2020-10-10',
        description: 'London',
        status: 'Pending',
      },
      {
        id: 4,
        cName: 'Josh',
        type: 'Law',
        date: '2020-10-10',
        description: 'US',
        status: 'Pending',
      },
      {
        id: 5,
        cName: 'Kane',
        type: 'Law',
        date: '2020-10-10',
        description: 'London',
        status: 'Pending',
      },
    ],
  },
};
