var moment = require('moment');

var created = 1234;
var date = moment(created);
// date.add(100, 'years').subtract(9, 'months').add(2, 'days');
// console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'));
