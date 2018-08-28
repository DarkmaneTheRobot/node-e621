var request = require("request");
/* Demo:
Tags: M/M
Rating: E
Agent: Dantè (by Darkmane on e621)
*/


// Get random image:
function random (tags, rating, agent) {
  var request = require("request");

  var options = { method: 'GET',
    url: 'https://e621.net/post/index.json',
    qs: { tags: 'm/m%20order:random+rating:e', limit: '1' },
    headers:
     { 'Postman-Token': 'baf9948b-85fb-4a39-9c74-2f71afa67b7e',
       'Cache-Control': 'no-cache',
       'User-Agent': 'DarkBartneder/1.0 (by Darkmane on e621)' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

}

module.exports = {
  random: random
}
