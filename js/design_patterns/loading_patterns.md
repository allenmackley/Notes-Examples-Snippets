There are several loading patterns used in JavaScript.

## CommonJS
The main thing to remember about CommonJS is that there is a global `module` object. At the end of each file, you simply set `module.exports = MyModule;`

Then, you can require it as a dependency to another file with:  
`var MyModule = require('./my_module');`

Pretty simple.

This loading pattern is built-in to NodeJS, but you have to use a library like Browserify to use it on the front end.

The downside is that when used on the front-end in the browser, the loading of modules is synchronous.

## Asynchronous Module Definition (AMD)
AMD loads files asynchronously.

Instead of a global `modules` object, we have a global `define` method available.
```
define("myModule", function() {
  return {
    //...module stuff
  }
});
```
Then, we can require it with...
```
require(["MyModule", "MySecondModule"], function(mMModule, MySecondModule) {
  //Do stuff with modules...
});
```
This will load both modules at the same time, then when they're both loaded, provide them to us through the callback.

We can also define a module that requires another...  
`define("App", ["MyModule", "MySecondModule"]...`

And there are several configuration options we can set up to define when and how to load files.

However, it isn't really practical to download multiple files asynchronously because there is a performance impact. It makes more sense to bundle all of them together and just download them once, or even better, to have just a few bundled files as entry points to different areas of the app.

## ES6 Import and Export
Now, with ES6, it's even simpler.  
`export MyModule;`

Then, in the file we want to include it.  
`import MyModule from './my_module'`

Most modern browsers support ES6 import and export, but NodeJS doesn't. So, with NodeJS, use the CommonJS style, at least for now.

`import` is synchronous, just like CommonJS, so it's a good idea to bundle and compress everything together into one (or a few) files for faster download.