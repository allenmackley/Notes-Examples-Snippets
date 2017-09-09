const fs = require('fs');

//readFile() is synchronous, so it will wait until the entire file is read before envoking the callback, buffering the entire file in one variable. If our app has heavy traffic, readFile() could impact performance and create latency.
// fs.readFile("./chat.log", "UTF-8", function(err, chatlog) {
//   console.log(`Fire Read ${chatlog.length}`);
// });
// console.log("Reading File");

//So, let's create a read stream in order to create small chunks of our data in a stream.
const stream = fs.createReadStream('./chat.log', 'UTF-8');

var data = "";

//Listens one time for a data event, to let us know that we've started reading a file
stream.once('data', function() {
  console.log("\n\n\n");
  console.log("Started Reading File");
  console.log("\n\n\n");
});
//Listens for each chunk
stream.on('data', function(chunk) {
  process.stdout.write(`  chunk: ${chunk.length} |`);
  data += chunk;
});
//Listens for when we reach the end of the stream
stream.on('end', function() {
  console.log("\n\n\n");
  console.log(`Finished Reading File ${data.length}`);
  console.log("\n\n\n");
});