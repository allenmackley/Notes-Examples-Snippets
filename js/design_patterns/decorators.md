## Decorators

  They can be used to modify existing systems where we wish to add additional features to objects without the need to heavily modify the underlying code using them.

The Decorator Pattern gets us away from using sub-classing and inheritance, which can be restrictive in most scenarios.

Instead of relying on inheritance, we create a class for each object type and then "decorate" it with mixed in modules.

If we wanted to create a character in a game, for example, we wouldn't want to give him a thousand sub-classes for each possible armor type. Instead, we would mix in the armor types as required by the system or  the user's choices. 

An important concept of the Decorator Pattern is that we don't want to modify the original object, we just want to decorate it.

We can do this really easily with jQuery with:  
`var settings = $.extend({}, defaults, options);`

This takes an empty object `{}` and adds `defaults` and `options` to it, mixing them both into the empty object. So `options` is decorating `defaults`.

It's similar to a Mixin Pattern, except that we're not actually adding `options` to `defaults`. The `defaults` bass object (or "class") remains unchanged, we're decorating an instance of it.

### How much to use the decorator pattern?
How often we use the Decorator Pattern depends on how unique each object instance needs to be in our app. 

If we were designing a game where every character was as real as real-world people, then almost every person instance would be composed of decorators. However, in actual game design we usually fall back on several defaults, and there are usually a surprising number of characteristics that are actually the same accross large groups of characters in a world. Therefore, we may want to use some mixture of Sub-Classing in order to achieve the best performance and code reusability. 