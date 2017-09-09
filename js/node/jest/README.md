Jest is a really great JavaScript testing library that wraps Jasmine.js. It has a feature called Snapshots that are great for testing React templates, and can also be used with underscore.js to test Backbone and Marionette.

In package.json...

`npm install jest`

Name test files in the format `filename.test.js`

Test files can also be grouped under a folder named `__test__`

Inside the test file, include the files that we need to test.
`const modulename = require('./modulename')`

Or, ES6 way...
Note, that using `import` isn't supported on very many browsers yet and so if I used it, make sure to use it with Babel.
`import modulename from './modulename'`

package.json config...
```
"scripts": {
  "test": "jest",
  "tdd": "jest --watch"
},
"jest": {
  "testEnvironment": "node",
  "moduleFileExtensions": [
    "js",
    "html"
  ],
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.html$": "<rootDir>/app/javascript/stockwatcher/underscore_template_loader.js"
  }
}
```

We'll have to use two terminals, one for Webpack to watch files and rebuild them when they've changed, and a second one to watch for changes and run a test with Jest when they change.

[NPM package, Jestpack, to help with this.](https://www.npmjs.com/package/jestpack)

Under the "scripts" section, we have `"test": "jest"` which lets us do `npm test` to run Jest.

`jest --watch` will watch the file for changes and run the tests again automatically. We can do this with `npm tdd`.

In package.json under the Jest config we have the option to set a custom transform preprocessor. The "transform" section tells Jest how to handle different file types.

This underscore_template_loader.js file is necessary in order to help Jest import underscore template files with the `.html` extension. Webpack has this loader config set for itself in the webpack config, but Jest isn't aware of the Webpack config.  

```
const UnderscoreTemplateLoader = require('underscore-template-loader')

module.exports = {
    process(src, filename, config, options) {
        return UnderscoreTemplateLoader(src);
    }
}
```

#### About Mocking
* Mocks are "fake" objects that act as stand-ins. They simulate real objects in ways that we want to control.
* Mocks are often used when you only need to test a part of how any object works, _and don't want to require the whole object or all of its dependencies._ It's used to *simplify* and *limit* the conditions of a test, when doing otherwise would be unreasonably cumbersome.
* Examples of when to mock...
  * A connection to a server where we don't actually want to wait for the response from the server, which would slow down our tests. 
  * When we want to test data that would be on the production site, without actually reading or writing data to the production site, because that's dangerous.
  * When something is under development and not fully completed, but we want to test some other feature that might rely on it when it is completed. 
* It's also used to model situations that don't happen normally in a live scenario, but for which we still need to test and be prepared for. We do this by subclassing the original class, and adding whatever we need to it in order to meet those conditions, and then we test the subclass. 
* Mocks are different than stubs. Generally speaking, a stub is just a set of data, whereas mocks contain methods and functionality.

#### Setups and Teardowns
* When we have some code that is run before or after several tests, we can write DRYer code with the use of setup and teardown functions.

#### Testing Asynchronous Code
* When testing asynchronous code, make sure to return the callback at the end of the test, otherwise Jest will come to the end of the function and won't see the result.
* Another solution is to use `resolves()` or `rejects()`

#### Matchers
* Matchers simply say "does this result match this condition."
* There are various different matchers, such as `toBe()`, `toEqual()`, `toBeTruthy()`, `toBeGreaterThan()`, `toMatch()`, `toContains()`, `toThrow()`, to name a few. 

