const Person = require('./Person');
const ben = new Person("Ben Franklin");
const george = new Person("George Washington");
// console.log('ben', ben);
george.on("speak", function(said) {
  console.log(`${this.name}: ${said}`);
});
//listen for the speak event, this is our observer
ben.on("speak", function(said) {
  console.log(`${this.name}: ${said}`);
});
//emit the event, this is our observable
ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone, than to be in bad company.");
