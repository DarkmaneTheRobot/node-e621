var request = require("request");
/* Demo:
Tags: M/M
Rating: E
Agent: Dantè (by Darkmane on e621)
*/

var http = require("https");

var options = {
  "method": "GET",
  "hostname": "https://e621.net/post/index.json?tags=m/m%20order:random+rating:e&limit=1"
  "headers": {
    "User-Agent": "DarkBartneder/1.0 (by Darkmane on e621)",
    "Cache-Control": "no-cache",
    "Postman-Token": "41e0c23b-0201-45ff-acfb-eae9c896a96c"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
