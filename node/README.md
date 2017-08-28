Installation and configuration examples, and examples of basic functionality for NodeJS.

### Theory behind NodeJS
IO operations take much, much longer than other operations. Therefore, if we can move our IO to asynchronous, event-driven operations, as is done with NodeJS, then we can make apps that run very fast and make good use of resources.

Writing our applications to work in NodeJS on a single event thread, makes us think about IO, and how we can work around it as efficiently as possible.

### What about for CPU intensive tasks? Aren't those slow when run on a single thread?
Yes, but we can spawn a separate process or webworker specifically for those situations when they occur. Again, giving us the power of a single threaded event loop for most situations, plus the power to spawn off a thread when needed for any other unique situation.
