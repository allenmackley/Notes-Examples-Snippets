//The EventEmitter makes is really easy to set up the Observer Pattern.
//Events are handled asyncronously in node.js
const EventEmitter = require('events').EventEmitter;

class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}
//module.exports is what is returned on the require statements
module.exports = Person;
