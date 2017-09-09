var fs = require('fs');
var path = require('path');
const readline = require('readline');
//If we don't define a text encoding, the file is read as binary. When might we want to read the file as binary? Well, maybe if we want to just move it, such as read it and put it into a database.
// var contents = fs.readFile('./README.md', function(){});

//So, add a text encoding.
var contents = fs.readFile('./README.md', 'UTF-8', function(err, contents) {
  if (err) {
    console.log(err);
  }
  console.log(contents);
});

fs.readdir('../', function() {

});

const stream = fs.createReadStream('./chat.log');
const lineReader = readline.createInterface(stream);

lineReader.on('line', function(line) {
  console.log('Line from file', line);
});
