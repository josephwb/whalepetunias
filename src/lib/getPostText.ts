import * as fs from 'fs';

export default async function getPostText() {
  // Generate the text for your post here. You can return a string or a promise that resolves to a string
  
  // read entire file into an array, pick random line to return
  fs.readFileSync('./example.txt','utf8');
  var array = fs.readFileSync('./example.txt','utf8').toString().split("\n");
  
  //console.log(array.length);

  // get rid of empty strings
  array = array.filter(function(n){ return n.length > 0});
  // get rid of headers e.g. Chapter. use '#' to identify these
  array = array.filter(function(n){ return !n.startsWith("#")});
  
  // choose one of the lines...
  var x = Math.floor(Math.random() * array.length);
  var line = array[x];
  
  //console.log(array.length);
  console.log(x);
  console.log(array);

  // implement a (while) check to ensure strings are >= 300 characters?
  // filter command (empty) would work for this

  return line;

  //return "Hello from the Bluesky API";
}
