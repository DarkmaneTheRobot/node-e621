const e621 = require('./e621.js');

var request = e621.random("m/m", "E", 1, post => {
  console.log(post);
  console.log('tags: ' + post[0]['tags']);
  console.log('File URL: ' + post[0]['file_url']);
  console.log('artists: ' + post[0]['artist']);
});
