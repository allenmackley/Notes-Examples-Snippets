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
* Mocks are "fake" objects that act as stand-ins.
* Mocks are often used when you only need to test a part of how any object works, and don't want to require the whole object or all of its dependencies. 
* Mocks are different than stubs. Generally speaking, a stub is just a set of data, whereas mocks contain methods and functionality.