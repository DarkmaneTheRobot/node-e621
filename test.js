const e621 = require('./e621.js');

var request = e621.random("m/m", "E", 1);
console.log(request);
var result = JSON.parse(request);

console.log(result.file_url);
