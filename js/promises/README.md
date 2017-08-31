#### Promises
* A Promise is a type of object which waits for an asynchronous response and then does something with it, either on success or failure, or `resolve()` or `reject()`.
* It can be really useful to return promises to other functions that are expecting to handle them. 
* They're great for handling code organization so that we're not defining multiple layers of nested callbacks.
* Promises used to be a feature available in libraries like jQuery, but now they are also available in JavaScript itself. They're currently supported across all major browsers except for IE.
* We could use promises for anything asynchronous, such as file IO, to call an API, or to wait for a `setTimeout()`.
* We can chain promises too! So that we can setup multiple asynchronous events in order.

To create a promise in jQuery looks like this:  
`var dfd = $.Deferred();`

With ES6:  
```
const dfd = new Promise((resolve, reject) => {
    // do something asynchronous which eventually calls either:
    //   resolve(someValue); // fulfilled
    // or
    //   reject("failure reason"); // rejected
});
```

Either way, we use `then()` to handle it when it's done. `then()` will get called on `resolve()` or `reject()`
```
dfd.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above. It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
});
```

The handlers are given in this order:  
`doSomething().then(successCallback, failureCallback);` 

We can also chain `catch()` to `then()` to catch errors.

We can define multiple promises, and wait to trigger our callback until all of them are resolved with `all()` instead of `then()`

(For more examples, go to:)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises]

We can do stuff like this to chain promises...
`[func1, func2].reduce((p, f) => p.then(f), Promise.resolve());`
Whoa, clever.