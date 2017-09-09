const fs = require('fs');
const readline = require('readline');
//readline is going to handle the process so that we don't have to access stdin and stdout directly.
const rl = readline.createInterface(process.stdin, process.stdout);
const realPerson = {
  name: '',
  sayings: []
};

rl.question("What is the name of a real person? ", (answer) => {
  realPerson.name = answer;
  //If we wanted to write the file synchronously...
  //create a new file using the person's name with ".md" extension
  // fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n=============\n\n`);

  
  const stream = fs.createWriteStream(realPerson.name + ".md");
  
  stream.write(`${realPerson.name}\n=============\n\n`);

  //sets up another prompt to input text
  rl.setPrompt(`What would ${realPerson.name} say? `);
  //then display that prompt
  rl.prompt();
  //on having input a line...
  rl.on('line', (saying) => {
    //typing 'exit' closes out the process
    if (saying.toLowerCase().trim() === 'exit') {
      stream.close();
      rl.close();
    //otherwise, keep asking
    } else {
      //collect our saying
      realPerson.sayings.push(saying.trim());
      //If we wanted to write synchronously, this would append each saying to the file
      // fs.appendFileSync(realPerson.name + ".md", `* ${saying.trim()} \n`);

      stream.write(`* ${saying.trim()} \n`);

      rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
      rl.prompt();
    }
  });
});

rl.on('close', () => {
  //%s replaces with a string
  //%j replaces with a json strong
  console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
  process.exit();
});
