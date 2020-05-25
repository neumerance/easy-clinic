import consumer from './consumer';

const PatientCaseConversationsChannel = (patientCaseId, onReceived) => {
  consumer.subscriptions.create({
    channel: 'PatientCaseConversationsChannel',
    patient_case_id: patientCaseId
  }, {
    received(data) {
      if (data.data) {
        onReceived(data);
      }
    }
  });
}

export default PatientCaseConversationsChannel;
