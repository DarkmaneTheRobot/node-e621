var request = require("request");
/* Demo:
Tags: M/M
Rating: E
Agent: Dantè (by Darkmane on e621)
*/


// Get random image:
function random (tags, rating, agent) {
  var options = { method: 'GET',
    url: 'https://e621.net/post/index.json',
    qs: { tags: tags +'%20order:random+rating:'+ rating, limit: '1' },
    headers:
     { 'Postman-Token': '189a389a-a453-4792-a8ed-8dfa3e491c53',
       'Cache-Control': 'no-cache',
       'User-Agent': agent } };

  request(options, function (error, response, body) {
    // Return the error to the user
    if (error){
      return error;
    }

    else{
      console.log(body);
      return;
      return body;
    }
  });
}

module.exports = {
  random: random
}
