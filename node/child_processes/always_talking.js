//spawn is good for long, ongoing processes for large amounts of data. exec is for immediate processes of small bits of data.
var sayings = [
  "You may delay, but time will not.",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  "It takes many good deeds to build a good reputation, and only one bad one to lose it.",
  "Early to bed and early to rise makes a man healthy, wealthy and wise.",
  "By failing to prepare, you are preparing to fail.",
  "An investment in knowledge pays the best interest.",
  "Well done is better than well said."
];
var interval = setInterval(function() {
  //get a random index from the sayings array
  var i = Math.floor(Math.random() * sayings.length);
  //write the saying to standard output
  process.stdout.write(`${sayings[i]} \n`);
}, 1000);
//listen for standard input data
process.stdin.on('data', function(data) {
  //log back the data received
  console.log(`STDIN Data Received -> ${data.toString().trim()}`);
  clearInterval(interval);
  process.exit();
});
