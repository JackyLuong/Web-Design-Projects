const dayjs = require("dayjs");
var advancedFormat = require('dayjs/plugin/advancedFormat');

dayjs.extend(advancedFormat);

console.log(dayjs().format());
console.log(dayjs().format('MMMM Do YYYY'));