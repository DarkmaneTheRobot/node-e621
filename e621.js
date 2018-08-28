var request = require("request");
/* Demo:
Tags: M/M
Rating: E
Agent: Dantè (by Darkmane on e621)
*/

  var request = require("request");

  request.get({
    "method" : "GET",
    "uri": "https://e621.net/post/index.json?tags=m/m%20order:random+rating:e&limit=1",
    "followRedirect":false,
    "headers": {
      'User-Agent': 'DarkBartneder/1.0 (by Darkmane on e621)'
    }
  },function (err, res, body) {
  console.log(err);
  console.log(res.statusCode);
  console.log(body);
});
