const moment = require('moment');

//unix epic Jan 1st 1970 00:00:00 am
var createdAt = new Date().getTime();
var date = moment(createdAt);

console.log(date.format('HH:mm a'));