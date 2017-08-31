Webpack can be used along Asset Pipeline, or to replace Asset Pipeline. In some situations it can provide more customization and flexibility for heavy JavaScript applications with Rails.

Webpack encourages us to build our application in a modular way, where each component requires what it needs and nothing else.

Let's say our app grows really huge. Asset Pipeline would bundle everything together and deliver it all at once in one big JavaScript file and CSS file. However, with Webpack, we can create more than one bundled file to be loaded strategically in our app based on more than one entry point.

(Rails and Webpack Why and How)[https://reinteractive.com/posts/213-rails-with-webpack-why-and-how]
> By building small modules like this we gain a few abilities:
> * We can require and bundle only the code that we know we need (JS, CSS, templates) in a maintainable way.
> * It becomes very simple to have multiple entry points for an application (with all the right code for each).
> * The front-end is portable, we could easily swap the backend to something different than Rails and use it as is.

> * The entry key defines entry points for my application. I can have as many as I want, Webpack will figure out the dependencies for each and build different bundles.
> * The output key defines where I want my bundles, in this case I save them in app/javascripts. There they can be easily found by our Rails application.
> * Loaders define loaders that we use in our modules, e.g. less, sass, fonts, css, etc. Loaders are installed using NPM.

Install webpack  
`npm install --save-dev webpack`

Install SASS loader
`npm install sass-loader node-sass webpack --save-dev`

After changing a file, run  
`node_modules/.bin/webpack` to compile and compress the file into one, the output file, which we usually call `bundle.js`. This will also compile and compress SCSS and CSS files to `style.css`.

In development, we can keep webpack listening for changes so that it automatically recompiles with  
`node_modules/.bin/webpack-dev-server`

Or, we can just use `webpack --watch`

When doing this, there is no need to use Grunt or Gulp.

This will also open up a browser tab that will automatically refresh on each re-compile.

A `webpack.config.js` file should be in the root of the project.
This is a typical configuration:  
```
var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './app/javascript/packs/driver.js',
    './app/javascript/myapp/styles/stocks.scss'
  ],
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'underscore-template-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  output: {
    path: __dirname + '/public',
    filename: 'js/bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore'
    }),
    new ExtractTextPlugin({
      filename: 'css/style.css',
      allChunks: true
    })
  ],
  resolve: {
    modules: [__dirname + '/node_modules', __dirname + '/app']
  },
  resolveLoader: {
    modules: [__dirname + '/node_modules']
  },
  devServer: {
    clientLogLevel: 'none',
    host: "local.mysite.com",
    port: 8080,
    publicPath: "/public/js/",
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
};
```
