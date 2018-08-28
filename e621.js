var request = require("request");
/* Demo:
Tags: M/M
Rating: E
Agent: Dantè (by Darkmane on e621)
*/

  var request = require("request");

function random(tags, rating, limit)
  request.get({
    "method" : "GET",
    "uri": "https://e621.net/post/index.json?tags=" + tags + "%20order:random+rating:" + rating +"&limit=" + limit,
    "followRedirect":false,
    "headers": {
      'User-Agent': 'E621APIWrapper/1.0 (by Darkmane on e621)'
    }
  },function (err, res, body) {
  if(err) return err;
  else return body;
});
