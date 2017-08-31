### Key benefits to using JavaScript

* Supported everywhere on any browser, OS, device.
* Single-threaded, event-driven, provides a unique kind of control that's good for performance across many different nodes.
* Fun and easy to write, but with a lot of depth, should you dive into it.
* Enthusiastic, positive developer community.
* Node Package Manager (NPM) contains the largest package repository in the world.

### Dev Tools
* Webpack
    * Packages together a whole bunch of JavaScript modules.
    * Will compile and compress JavaScript into a single file. Also does this for CSS.
* Browserify
    * Will launch a local server that will check for changes on the file system and reload the browser whenever a file is changed.
    * Included in Webpack.
* TypeScript
    * Compiles modern JavaScript down to older versions with complete browser and device support.
    * Static typing capabilities.
* Bable
    * Similar to TypeScript. However, babel is a transpiler. TypeScript is a transpiler + type checker.
* CoffeeScript
    * Advanced dialect of JavaScript that makes it easier to write, that compiles down to JavaScript.
* Jest 
    * Testing framework.


### Theory behind NodeJS
IO operations take much, much longer than other operations. Therefore, if we can move our IO to asynchronous, event-driven operations, as is done with NodeJS, then we can make apps that run very fast and make good use of resources.

Writing our applications to work in NodeJS on a single event thread, makes us think about IO, and how we can work around it as efficiently as possible.

[Great video talking about this.](https://www.youtube.com/watch?v=L0pjVcIsU6A)

### What about for CPU intensive tasks? Aren't those slow when run on a single thread?
Yes, but we can spawn a separate process or webworker specifically for those situations when they occur. Again, giving us the power of a single threaded event loop for most situations, plus the power to create a worker when needed for any other unique situation.
