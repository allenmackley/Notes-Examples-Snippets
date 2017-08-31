//This lets us execute system commands, which can be very powerful. We get all of the power of the terminal, but within node.
var exec = require("child_process").exec;

// exec("open http://www.linkedin.com");
// exec("open -a Terminal .");

//execute a system command and then do something with the result
// exec("ls", function(err, stdout) {
//   if (err) {
//     throw err;
//   }
//   console.log("Listing Finished");
//   console.log(stdout);
// });
exec("git version", function(err, stdout) {
  if (err) {
    throw err;
  }
  console.log("GIT Version Executed");
  console.log(stdout);
});
