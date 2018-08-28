const e621 = require('./e621.js');

var request = e621.random("m/m", "E", 1, body => {
  console.log(body);
  var post = JSON.parse(body);
  console.log('tags: ' + post.tags);
  console.log('File URL: ' + post.file_url);
  console.log('artists: ' + post.artist);
});
