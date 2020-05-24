import consumer from './consumer';

const PatientCasesChannel = (onReceived = () => {}) => {
  consumer.subscriptions.create({
    channel: 'PatientCasesChannel'
  }, {
    received(data) {
      onReceived(data);
    }
  });
}

export default PatientCasesChannel;
