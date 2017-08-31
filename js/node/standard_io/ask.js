var questions = [
  "What is your name?",
  "What is your favorite hobby?",
  "What is your preferred programming language?"
];

var answers = [];

function ask(i) {
  process.stdout.write(`\n ${questions[i]}`);
  process.stdout.write(" > ");
}
//listens for data coming in from the command line
process.stdin.on('data', function(data) {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
  // process.stdout.write('\n ' + data.toString().trim() + '\n');
});

//listens for the exit event, either by calling exit() or by ctrl + c
process.on('exit', function() {
  process.stdout.write('\n');
  process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);
  process.stdout.write('\n');
});

ask(0);
