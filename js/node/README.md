Installation and configuration examples, and examples of basic functionality for NodeJS.

### Theory behind NodeJS
IO operations take much longer than other operations. Therefore, if we can move our IO to asynchronous, event-driven operations, as is done with NodeJS, then we can make apps that run very fast and make good use of resources.

Writing our applications to work in NodeJS on a single event thread, makes us think about IO, and how we can work around it as efficiently as possible.

[Great video talking about this.](https://www.youtube.com/watch?v=L0pjVcIsU6A)

### What about for CPU intensive tasks? Aren't those slow when run on a single thread?
Yes, but we can spawn a separate process or webworker specifically for those situations when they occur. Again, giving us the power of a single threaded event loop for most situations, plus the power to create a worker when needed for any other unique situation.

### Dealing with crashes
With NodeJS, Node acts as both the web scripting language and the web server. Because Node is also the web server, a bug in the app will cause the entire server to fail. This is different than using Ruby or PHP, for example. For those languages, the server is most likely Apache or NGINX, and if the app crashes the server still runs. This can be better in some situations; for example, if one route causes a crash, it may just be that route, whereas all of the other routes would still resolve to their locations and deliver content. So, when working with NodeJS, we need to be especially careful. However, one could argue that we should always be especially careful anyway. There are also some ways around this.

* Use the `forever` NPM package. This will restart the NodeJS server automatcially whenever it crashes.
* Use the `cluster` module so that if one user encounters a bug, only those users in his cluster experience an interruption, instead of everyone who's using the entire app, which could be a lot of people.
* [Listen for errors on every event and make sure to catch and handle them correctly.](https://www.joyent.com/node-js/production/design/errors) 
* Test really thoroughly before publishing to production. Any bugs should be caught before going to production.
* It can seem like things are working, until a bug is encountered in an asynchronous callback somewhere, and then the entire app comes crashing down, so be careful to test async callbacks thoroughly!
* Although handling errors can be frustrating to work around in NodeJS, it's a tradeoff for speed. NodeJS is fast! 

### When is it best use NodeJS?
* Real-time applications
* Big data 
* Apps with heavy IO

We don't need to disqualify PHP, however, because non-blocking I/O can be performed with ReactPHP. In my opinion, however, why use PHP for non-blocking I/O when it can also be done with Javascript - a language originally designed for it - thereby using one language for full-stack development instead of two? NodeJS is also more likely to lead developers into using asynchronous design patterns because it's a part of its very nature. NPM is also the largest package repository in the world. Most of those packages most likely use non-blocking I/O, but can the same be said for most current PHP packages?

