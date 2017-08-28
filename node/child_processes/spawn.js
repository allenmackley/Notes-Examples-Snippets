var spawn = require("child_process").spawn;
//send the command that we want to run in the terminal, followed by the arguments for it.
var cp = spawn("node", ["always_talking"]);

cp.stdout.on("data", function(data) {
  console.log(`STDOUT: ${data.toString()}`);
});

cp.on('close', function() {
  console.log("Child Process has ended");
  process.exit();
});

setTimeout(function() {
  //we write "stop" to standard input. This triggers the process standard input listener for "data" in the always_talking.js file. That, in turn, calls exit on the process, which, in turn, calls close on the spawned child process.
  cp.stdin.write("stop");
}, 4000);
