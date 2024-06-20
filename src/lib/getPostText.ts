import * as fs from 'fs';

export default async function getPostText() {
  // Generate the text for your post here. You can return a string or a promise that resolves to a string
  
  // read entire file into an array, pick random line to return
  fs.readFileSync('./example.txt','utf8');
  var array = fs.readFileSync('./example.txt','utf8').toString().split("\n");

  // choose one of the lines...
  //var line = array[Math.floor(Math.random()*array.length)]
  var x = Math.floor(Math.random() * array.length);
  var line = array[x];

  //console.log(array.length);
  console.log(x);
  console.log(array);

  return line;

  //return "Hello from the Bluesky API";
}
