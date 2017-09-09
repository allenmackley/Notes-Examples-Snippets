const fs = require('fs');

if ( fs.existsSync("./lib/project-config.js") && fs.existsSync("./lib/notes.md") ) {
  //synchronous version
  fs.renameSync("./lib/project-config.js", "./lib/config.json");

  console.log("Config json file renamed");

  //asynchronous version
  fs.rename("./lib/notes.md", "./notes.md", function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Notes.md moved successfully");
    }
  });
}

