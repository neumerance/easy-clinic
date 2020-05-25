import consumer from './consumer';

const PatientCaseConversationsChannel = (onReceived = () => {}) => {
  consumer.subscriptions.create({
    channel: 'PatientCaseConversationsChannel'
  }, {
    received(data) {
      onReceived(data);
    }
  });
}

export default PatientCaseConversationsChannel;
