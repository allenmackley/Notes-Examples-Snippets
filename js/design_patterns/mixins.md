## What's a Mixin?
A Mixin is a unit of code (usually a module) that we include or "mix in" with other code, combining it. 

This is code that's modular - it's going to be used in more than one place.

The main difference between classes and modules is that classes can be instantiated as objects while standard modules cannot.

So, unlike classes, we aren't instantiating mixins as objects. Modules are simply groups of methods that we want to mix into with classes. In JavaScript, since everything is an object, we're simply combining objects.

## How does it work in JavaScript?
`_.extend( MyClassObject.prototype, myMixinMethods );`  

Underscore's `_extend` simply combines objects, copying the methods from the second object into the first. The first object will retain what methods it already has, and then be given the additional methods from `myMixinMethods`. 

This will add `myMixinMethods` to the prototype for `MyClassObject`. We can then create an instance of `MyClassObject` and the new methods that were mixed in will be available.

## When to use?
Use a mixin whenever there are multiple places in our app that need to use the same method. 