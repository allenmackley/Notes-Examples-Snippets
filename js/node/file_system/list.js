var fs = require('fs');
//Synchronously read the following directory. (In this case, just read the contents of the parent directory, up one level.)
var files = fs.readdirSync('../');
/*

-->> This space here is important. In a synchronous read, any code written here will NOT run until the read completes. (Including our log below.)

*/
console.log('Sync read complete.');

//Asynchronously read the following directory. Read up one level again, but in this case, define a callback function that will get called on completion.
fs.readdir('../', function(err, files) {
  if (err) {
    throw err;
  }
  console.log('Async read complete.');
  console.log(files);
});
/*

-->> In this situation, the code written here WILL run immediatly, and then the callback function above will be run AFTER the callback finishes, depending on how much time it takes to read the file.

*/
console.log("Reading Files...");
