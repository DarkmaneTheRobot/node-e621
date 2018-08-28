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
    qs: { tags: tags + '%20order:random+rating:'+ rating, limit: '1' },
    headers:
     { 'Postman-Token': '630c7d85-9e2e-4037-b411-b29cba7e7796',
       'Cache-Control': 'no-cache',
       'User-Agent': agent} };

  request(options, function (error, response, body) {
    if (error) return error;

    console.log(body);
  });

}

module.exports = {
  random: random
}
