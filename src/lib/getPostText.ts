import * as fs from 'fs';

export default async function getPostText() {
  // Generate the text for your post here. You can return a string or a promise that resolves to a string
  
  // read entire file (hardcoded 'text.txt') into an array, pick random line to return
  var array = fs.readFileSync('./text.txt','utf8').toString().split("\n");
  
  //console.log(array.length);

  // get rid of empty strings (used for formatting)
  array = array.filter(function(n){ return n.length > 0});
  
  // get rid of headers e.g. title, chapter, preface, etc.
  // i used '#' to identify these
  array = array.filter(function(n){ return !n.startsWith("#")});
  
  // choose one of the lines...
  var x = Math.floor(Math.random() * array.length);
  var line = array[x];
  
  // troubleshooting stats
  console.log(array.length);
  console.log(x);
  //console.log(array);

  // implement a (while) check to ensure strings are >= 300 characters?
  // filter command (e.g. checking for empty, above) would work for this
  
  
  // if text is short enough, append hashtag.
  // do i want this? set to false for default
  var use_hashtag = false;
  
  var hashtag = new String ( " #HHGG");
  if (line.length < 294) {
    if (use_hashtag) {
      line = line.concat(hashtag.toString());
    }
  }

  return line;

  //return "Hello from the Bluesky API";
}
