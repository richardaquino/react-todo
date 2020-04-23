var moment = require('moment');

console.log(moment().format());


var now = moment();

console.log('Current Time Now: ', now.unix());

var timestamp = 1587624231;
var currentMoment = moment.unix(timestamp);

console.log('Current Moment', currentMoment.format('MMM DD, YYYY @hh:mm a'));

//January 3rd, 2016 @ 12:13 AM
console.log('Current Moment', currentMoment.format('MMMM Do, YYYY @hh:mm A'));