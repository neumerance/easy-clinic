const moment = require('moment');

const fromNow = (dateTime) => {
  return moment.utc(dateTime, "YYYY-MM-DDTh:mm:ss").fromNow();
}

export default {
  fromNow
}
