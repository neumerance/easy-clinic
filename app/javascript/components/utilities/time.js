const moment = require('moment');

const fromNow = (dateTime) => {
  return moment(dateTime, "YYYY-MM-DDTh:mm:ss").fromNow();
}

export default {
  fromNow
}
