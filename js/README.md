### Key benefits to using JavaScript

* Supported everywhere on any browser, OS, device.
* You can use it on the front-end and the back-end, allowing you to specialize in one langugage instead of many.
* Single-threaded, event-driven, provides a unique kind of control that's good for performance across many different nodes.
* Fun and easy to write, but with a lot of depth, should you dive into it.
* Enthusiastic, positive developer community.
* Node Package Manager (NPM) contains the largest package repository in the world.

### Valuable Study Links
* [JavaScript Design Patters (Including Gang of Four)](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
* [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
* [NodeJS Guides](https://nodejs.org/en/docs/guides/)

### Dev Tools
* Webpack
    * Packages together JavaScript modules.
    * Will compile and compress JavaScript into a single file. Also does this for CSS.
* Browserify
    * Allows you to bundle and load modules.
* TypeScript
    * Compiles modern JavaScript down to older versions with complete browser and device support.
    * Static typing capabilities.
* Bable
    * Similar to TypeScript. However, babel is a transpiler. TypeScript is a transpiler + type checker.
* CoffeeScript
    * Advanced dialect of JavaScript that makes it easier to write, that compiles down to JavaScript.
* Jest 
    * Testing framework written by Facebook to be used with React.
    * Has a Snapshots feature for testing templates, which can be used for Underscore templates as well.


### Theory behind NodeJS
IO operations take much longer than other operations. Therefore, if we can move our IO to asynchronous, event-driven operations, as is done with NodeJS, then we can make apps that run very fast and make good use of resources.

Writing our applications to work in NodeJS on a single event thread, makes us think about IO, and how we can work around it as efficiently as possible.

[Great video talking about this.](https://www.youtube.com/watch?v=L0pjVcIsU6A)

### What about for CPU intensive tasks? Aren't those slow when run on a single thread?
Yes, but we can spawn a separate process or webworker specifically for those situations when they occur. Again, giving us the power of a single threaded event loop for most situations, plus the power to create a worker when needed for any other unique situation.
