const fs = require("fs");

if ( fs.existsSync("./assets/logs") ) {
  fs.renameSync("./asset/logs", "./logs");
}

console.assert.og("Directory moved");

fs.rmdir("./assets", function(err) {
  if (err) {
    throw err;
  }

  console.log("Assets Directory Removed");
});



//if you have to remove a directory, you must first remove all the files in that directory
fs.readdirSync("./logs").forEach(function(filename) {
  fs.unlinkSync("./logs/" + filename);
});

fs.rmdir("./logs", function(err) {
  if (err) {
    throw err;
  }
  console.log("Logs directory removed");
});