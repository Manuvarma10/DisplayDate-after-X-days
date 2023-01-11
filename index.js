const days = require("date-fns/addDays");

const result = function (Day) {
  const daysAdd = days(new Date(2020, 7, 22), Day);
  return `${daysAdd.getDate()}-${
    daysAdd.getMonth() + 1
  }-${daysAdd.getFullYear()}`;
};

module.exports = result;
