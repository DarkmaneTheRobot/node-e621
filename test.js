const e621 = require('./e621.js');

var request = e621.random("m/m", "E", 1, body => {

console.log(body);

});
