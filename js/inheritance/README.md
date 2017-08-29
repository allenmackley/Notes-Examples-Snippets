### The old, ES5 way of doing inheritance...

First define a function that we will use to act as our constructor.
```
function Vehicle(name, type) {
  this.name = name;
  this.type = type;
}
```

Create our methods, in this case, getter methods for the properties of our instance.
```
Vehicle.prototype.getName = function getName() {
  return this.name;
};
Vehicle.prototype.getType = function getType() {
  return this.type;
};
```

This is our child class. This is the like calling `super()`. We call the parent constructor within the context of the child, passing a name, and the default type here as 'car', since this child will always be of the type `Car`. Because we're calling `Vehicle` within the context of `this`, `this.name` and `this.type` are set in the context of `Car`, not `Vehicle`.
```
function Car(name) {
  Vehicle.call(this, name, 'car');
}
```

Create a prototype link between Car's prototype and Vehicle's prototype.  
`Car.prototype = Object.create(Vehicle.prototype);`

The constructor reference gets overwritten when we do the above, so we have to set it again back to `Car`.
`Car.prototype.constructor = Car;`

We also store a reference back to the parent so we can access it easily if we need to.  
`Car.parent = Vehicle.prototype;`

And now we provide `Car` with its own prototype methods.  
```
Car.prototype.getName = function() {
  return 'It is a car: '+ this.name;
};
```

Create a new car. At this point, `Car`'s constructor is called, as well as the constructor for `Vehicle`.  
`var car = new Car('Tesla');`

Both `Car` and `Vehicle` have a method `getName()`, however, the first occurrence of it is found on `Car`, so we call that one.  
`console.log(car.getName()); //It is a car: Tesla`

`Vehicle` has a `getType()`, but `Car` doesn't. However, we linked their prototypes earlier (thus, the inheritance), and so the JavaScript engine is designed to search the prototype for `Car` first, and if it can't find it, it references the hidden `__proto__` property, which says that there is a link to the prototype for `Vehicle`. It checks `Vehicle` and finds a `getType()` method and so calls it and we get back the type of "car".  
`console.log(car.getType()); //car`

### The new, ES6 way...

When I first learned inheritance in ES5 a few years ago, it took me a while to fully absorb. Now we can do the same thing much more intuitively, using ES6. The new pattern looks a lot more like other languages.
```
class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  getName() {
    return this.name;
  }
  getType() {
    return this.type;
  }
}
```
Like before, we're able to call the constructor of the parent within the context of the child. However, this time, it reads much simpler, with just the keyword `super`. We should be aware, however, that `this.name`, and `this.type`, are still being set to `Car`.
```
class Car extends Vehicle {
  constructor(name) {
    super(name, 'car');
  }
  getName() {
    return 'It is a car: ' + super.getName();
  }
}

let car = new Car('Tesla');
console.log(car.getName()); //It is a car: Tesla
console.log(car.getType()); //car
```  
Note that we use the `__proto__` object here to link the objects, and under the hood it works in a similar way as what happens under the hood in ES5. However, in the ES6 example, we don't explicitly set the prototype property, however, the `__proto__` link still gets set. The prototype property, and the hidden `__proto__` property, are two different things.
