var request = require("request");
/* Demo:
Tags: M/M
Rating: E
Agent: Dantè (by Darkmane on e621)
*/

var http = require("https");

var unirest = require("unirest");

var req = unirest("GET", "https://e621.net/post/index.json");

req.query({
  "tags": "m/m%20order:random+rating:e",
  "limit": "1"
});

req.headers({
  "Postman-Token": "4b545310-f96f-49c3-9bc5-2d6b155ab842",
  "Cache-Control": "no-cache",
  "User-Agent": "DarkBartneder/1.0 (by Darkmane on e621)"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
