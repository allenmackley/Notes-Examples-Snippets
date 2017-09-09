const fs = require("fs");

//If the directory is already there, we'll get an error, so let's check if it exists first.
if ( fs.existsSync("lib") ) {
  console.log("Directory already there");
} else { 
  fs.mkdir("lib", function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Directory Created");
    }
  });
}
