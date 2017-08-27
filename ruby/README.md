## My Notes on Ruby

#### Basic reminders
* Type `irb` in the command line to get an Interactive Ruby Shell
* Create a new Rails app with `rails new app_name`
* <=> is the comparison operator, used for things like sorting functions (PHP has this now too in V7)

#### rbenv
* `rbenv install 2.3.3` is an example for installing a version of ruby.
* Always use `rbenv rehash` after install or switching versions.
* After switching Ruby versions, don't forget to update NGINX config file and point Phusion Passender to the new install location.
* Unlike RVM, which has `use` for switching Ruby versions, rbenv is designed to respect your project's `.ruby-version` file.

#### To Install Ruby on OS X
* Note that OS X comes with Ruby already installed, however, we want to update it and install some utilities
* First, make sure to install Homebrew (if it isn’t installed already) by copying code into terminal from the Homebrew website
* Make sure OS X command line tools are installed (download from website)
* Install rbenv to manage Ruby versions - "brew install rbenv" and `brew install ruby-build`
* Put rbenv initializer script into .bash_profile `$(rbenv init-)`
* reload bash profile `source ~/.bash_profile`
* Check ruby-lang.org website for the latest version, then install Ruby, (example: `rbenv install 2.2.2`)
* Switch to newly installed version `rbenv rehash`
* Use newly installed version globally `rbenv global 2.2.2`
* Check versions with `rbenv versions`
* Update gem with `gem update —system`
* Install bundler - `gem install bundler` - which manages ruby gems and dependencies (like how Composer works with PHP)
* Find the latest version of Rails on the rubygems.org website
* `gem install rails —no-ri —no-rdoc —version 4.2.1` to install Ruby on Rails without documentation
* `rbenv rehash`
* Check if MySQL is installed with `mysql —version` and `which mysql`
* If MySQL not installed, then install it with `brew install mysql` (unless using MAMP)
* Tell MySQL to launch at startup with `ln -sfv /usr/local/opt/mysql/\*.plist ~/Library/LaunchAgents`
* Check if installed with `mysql —version`
* Start MySQL with `mysql.server start`
* Set MySQL root password with `mysqladmin -u root password`
* Install MySQL Ruby Gem with `gem install mysql2` or by including it in the Gemfile.

#### To Create a Rails Project
* "cd ~/sites"
* “rails new myprojectname -d mysql"
* specify the gems needed in the Gemfile
* run “bundle install” to configure gems from Gemfile
* configure database name and credentials at /config/database.yml

To Start Rails WEBrick server
* “rails server” or “rails s"
* Go to “localhost:3000” (Note that if configs changed, you need to restart the WEBrick server)

To Generate Rails Controller
* cd into project directory
* “rails generate controller nameofcontroller nameofview1 nameofview2” etc.

To Generate Migration
`rails generate migration NameOfMigration`

To Generate Model
`rails generate model NameOfModel`

To Run Migration
`rake db:migrate`
or
`rake db:migrate RAILS_ENV=development` (or production)

To Get Migration Status
`rake db:migrate:status`

To install new Gem files
`bundle install`

To run rests in Ruby on Rails
`bundle exec rake test`
or just `rake test`
or just `rake`

Rails “Incomplete Response from Application” could mean several things:
* That the SECRET_KEY_BASE is not set in the `.bash_profile` or `.profile` (RAILS_ENV=production rake secret)
* That the SECRET_KEY_BASE is set, but not correct, or that the `.profile` needs to be re-sourced or the rails app restarted
* That MySQL isn’t running or needs to be restarted

#### On Single Page Apps...
* [Follow Google's guidelines](https://developers.google.com/webmasters/ajax-crawling/docs/learn-more)
* > "If you're starting from scratch, one good approach is to build your site's structure and navigation using only HTML. Then, once you have the site's pages, links, and content in place, you can spice up the appearance and interface with AJAX. Googlebot will be happy looking at the HTML, while users with modern browsers can enjoy your AJAX bonuses."
* Every route where SEO is a concern should first render the page on the server. Then, the user can navigate away from the page, or manipulate it in some way, with AJAX. What's important is that all of the data on the website can first be loaded using all of the available routes that can be crawled, before additional pages or components are generated.
* Any location that's purely an app, or perhaps one that deals with private user data, doesn't have to worry about this because SEO is not of a concern. However, it's also wise to keep the processing of private data on the server as much as possible where it's more secure.
* Therefore, it's often best to use server-side templating (such as what's provided in Rails) first, and then in concert with client-side templating where it makes sense depending on the purpose of the app's design.
* [Google has said that it can now index JavaScript applications](https://webmasters.googleblog.com/2015/10/deprecating-our-ajax-crawling-scheme.html), but that this kind of [Progressive Enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) is still the right idea.

#### Webpacker
* Webpacker works a lot like Sprockets...
  * It minifies and compresses files.
  * It includes dependencies and concatenates files all into one.
  * It compiles CoffeeScript to JavaScript, SASS to CSS, etc.
  * It provides a dev server that reloads the page automatically on every file change, similar to Gulp.
  * It provides a means of dealing with caching and fingerprinting assets.
* To install...
  * Make sure `yarn` is installed with `brew install yarn`. Yarn is similar to NPM, but with a few extra features.
  * If using Rails 5.1, create a new app with `rails new mynewapp --webpack=react` (If using React, otherwise use `=vue` or `=angular`)
  * If the project doesn't yet have webpacker...
    * Add the webpacker gem `gem 'webpacker'`
    * `rake webpacker:install`
    * `rake webpacker:install:react` (if using React... otherwise, replace with whatever the project requires)
    * add `javascript_pack_tag 'name_of_file'` and `stylesheet_pack_tag 'name_of_file'` to the area of the view template where the JS script tag or CSS link tag should be included.
    * `gem 'webpacker-react'` can be used to help with importing and linking React components together. (Refer to webpacker-react docs
* Gotchas...
  * If on loading `./bin/webpack-dev-server` the browser displays `cannot GET /` then update NodeJS and try again.

#### Rails and Sinatra
* Use Sinatra when you need a lite backend for a front-end app or only need to work with an API.
* Use Rails when you need a full web application.
* A slimmed down version of Rails used for working with APIs only can be installed using `rails new my_api --api`. This might be a better choice than Sinatra in certain situations where we expect our app to grow beyond an API-only app later. We get similar simplicity, but with the ability to scale to a full Rails app later.

#### Ruby on Rails and Laravel
* I like PHP and Laravel a lot, and will use Laravel happily when PHP is required…
* Both are beautiful frameworks; however, I think Ruby is a more beautiful language and is easier to read than PHP.
* Ruby takes less characters to write the same code. I chose to learn jQuery before it became the most popular JavaScript library for this reason, and it became very successful, so I'm glad I chose to learn it. In my experience, beautiful, easy to read languages tend to become the most popular and successful over time.
* I like how at the root level, almost everything in Ruby is an object. This is one of the things I like about JavaScript, also (although both languages work differently).
* PHP has features similar to both Java or Ruby, which I believe creates some ambiguity. One of the strongest points for choosing Rails, in my opinion, is the "convention over configuration" argument, simplicity, and design.
* Laravel was derived from Rails, but because Laravel's underlying language is PHP, I prefer Rails.
* PHP is a great choice right now when sheer speed is of a top concern. However, in most cases, I think there are factors in design in web development that are actually more important than the speed of the backend language, such as the use of caching images and assets, using a CDN, following Google's PageSpeed Insights recommendations for the loading order of page assets, image compression, efficient JavaScript, and user testing.

#### On SEO
* It’s important that server-side templates are used where SEO is a concern. Is the route used to display information or for user interaction? Is it an app or an article? If it’s an article, blog, doc, or other info page, use Rails ERB or HAML for the template engine. If it’s a app, or a widget of some sort, use something like React components.
* A single page application is not a good choice for informational pages. Keep the app portion of a service separate from the informational portion.
* Sometimes, Tubolinks is a better choice than a single page app as well. Tubrolinks can become a problem if it's used with third-party JavaScript libraries that haven't namespaced their CSS class selectors. This can usually be fixed by choosing JavaScript libraries that have been designed better and with this in mind.

#### On TDD
* Write failing tests before working on a feature, use TDD.
* Run `guard init minitest` to automatically run tests when a file is changed, thus saving time.
* Use the methodology of "test until boredom sets in", in other words, test to the degree that it makes sense, but don't waste time testing everything that can be reasonably assumed to work within the language.

#### On Organization
* Keep business logic out of controllers, keep controllers lite. Controllers should not be fat.
* Keep methods small. Remember the Single Responsibility Principal.
* Move business logic out of the Active Record model and into its own model if it doesn't belong there.
* Use partials for repeatable portions of HTML.
* Use view helpers where display logic is needed.
* Class methods can be grouped with `class << self`.
* Use the `lib` folder for classes or modules that are internal to the organization but used across multiple domains.
* Use the `vender` folder for third-party packages and tools.
* If the model serves a consistent functionality but varies on the parameters, give them a top level dir in app/. Such as `app/mailers`, `app/observers`, `app/workers/`, `app/serializers/`, `app/services/`, etc.

#### On OOP
* Ruby modules can be included for object composition. Composition is a preferable design pattern over inheritance in most situations because it offers greater flexibility for later changes that may occur or later requirements upon the system. Use inheritance only where it's actually appropriate or where the relationship is not likely to change.
* Ruby doesn't have the concept of interfaces built in to the language, but it can be mimicked: a module can be designed to raise an exception if a child doesn't overwrite its method.
* If what we want to do is create a set of constraints that define the behavior of an object, and then check them before we run our application, then we might consider that automated tests are a better design practice than using interfaces in order to enforce implementation rules. This is even more true when we favor composition over inheritance, which we should be in most situations.
* Getters and setters can be written manually in Ruby, but Ruby also has attr_reader, attr_writer, and attr_accessor can be used to create them more easily.
* Class properties have to use manually written getters and setters.
* Use the `concerns` directory in Rails to put custom modules where code is reused across ActionController and ActiveRecord modules. (But don't throw things in `concerns` that don't belong there.)
* `@` is used to refer to an instance variable, whereas `@@` is used for a class variable.
* Using `@bar` will always just access the value of the instance variable , however, using `self.bar` will run the getter method for `def bar ... end`. In Ruby, setters and getters can be defined automatically with `attr_accessor` which will just set or get the variable. However, if the getter or setter was written manually, it might do more than that, such as some other logic or calculation, so watch out and be aware of the differences between `@bar` and `self.bar` within the context of an instance.  

#### On language differences
* PHP uses the keyword `include` to load files, whereas Ruby uses `load`. The keyword `include` in Ruby is used to include modules as mixins, where as mixins in PHP (which are called traits) are included with the keyword `use`.
* Both use the keyword `require` to require files. PHP also has both `require` and `require_once` to avoid duplicate files being included, whereas in Ruby, just `require` prevents duplicate copies of the file from being loaded.
* `self` and `::` in PHP refer to the class method or class property of the class you're within, such as `self::myClassProperty` however, `::` in ruby refers to namespaced classes within modules. PHP can also refer directly to the class method or property by using the class name, such as `User::myClassProperty`. This says "The class property `myClassProperty` on the class `User`". In Ruby, you would do something like this: `User::myClassName`, which would refer to the class `myClassName` namespaced under the module `User`.
* In Ruby, class methods are simply referred to with a dot, such as `User.my_class_property`, we know it’s a class method because `User` is capitalized. If user is lowercased, such as `user.my_instance_property`, it's an instance property.
* Most languages define a new instance of a class with, for example, `user = new User`, however, Ruby does so with `user = User.new`
* `$this` in PHP refers to the object instance inside a method, such as `$this->myInstanceProperty`, whereas Ruby simply uses `@` or `self` (within the context of the method).
* `self` in Ruby refers to the nearest scope: if used within the class, it refers to the class, if used within a method, it refers to the instance (unless it's a class method).
* When getting an instance property or calling a method `self` can be omitted within the context of the class.
* PHP uses `private`, `protected` or `public` scope definitions. If none is specified, it's assumed to be public. Ruby organizes everything private or protected below the `private` or `protected` keywords, so that each keyword only needs to be written once, whereas everything above them is assumed to be public.
* Static properties and methods in PHP are defined with the keyword `static`, such as ` private static function doSomething() {}`. In Ruby, a `static` method is called a "class" method, and is defined simply with `def self.do_something ... end`
* Ruby Modules are the same concept as PHP Traits.
* To extend a class in Ruby is done with `<`, whereas PHP and ES6 use the keyword `extends`
* PHP 7 has the `namespace` keyword that can define namespaces for classes and the `use` keyword for aliasing. Ruby creates namespaces for classes by wrapping them in modules.
* `collection.inject` in Ruby is the same as `collection.reduce` in JavaScript.
* Ruby is both statically and dynamically typed in the sense that it determines the type by what the variable is set to, however, you can't do can't add a string to an integer or else you'll get an error. In PHP, you can, and you'll get the result as an integer. (PHP 7, however, has the option to declare strict typing if you want to use it with `declare(strict_types=1);`)
* PHP 7 has the new null coalescing operator, such as: `$page_title ?? "My page";`. This is done in Ruby like so: `page_title ||= "My page"`

#### On Security
* Always sanitize data, rendering it harmless from XSS.
* One great thing about Rails is the benefit of its built-in CSRF protection.
* Make sure to setup S3 correctly to avoid CORS where it isn't desired.
* Whitelist as much as possible.
* Never commit sensitive data to GIT.
* In production, don’t connect to the database with the root user.
* Use 2-factor authentication on as many web services as possible.
* Don’t give “hints” when displaying form error feedback that hackers could use.
* When using custom SQL, always use prepared statements with `?`.
* Make sure there are no unintended routes exposed to the public.
* Use a third-party authentication library, such as Devise, to ensure nothing important is missed in authentication.
* Don’t put sensitive data into cookies.
* Always salt and encrypt passwords and use a strong encryption algorithm.
* Don’t give users more admin access than they actually require.
* Use trusted third-party services to handle credit card data.
* Be very careful with regular expressions, especially when sanitizing data, because it’s easy to overlook flaws.

#### On Stability
* Run unit tests frequently.
* Backup database nightly.
* Create server snapshots regularly.
* Make sure the correct caching behaviors are setup in the CDN.
* Make sure logging level is not high in production so that log files don’t grow too large. Run a job that deletes log files on a regular interval to prevent memory problems. Also, make sure the server has enough memory to handle spikes in usage.
* Always test code on staging server first before updating production server.
* Use a load balancer and switch servers if one goes down.
* Stay one or two versions behind the latest software releases when using third-party tools to avoid major bugs.

#### Structs, and how they differ from hashes and classes
* Structs are faster, so keep them in mind whenever speed is a top concern.
* Generally speaking, Hashes and Structs are both used to hold data, unlike classes, which can also contain methods. (Although Structs in Ruby can hold behavior methods also)
* From Ruby docs: "A Struct is a convenient way to bundle a number of attributes together, using accessor methods, without having to write an explicit class."
* Use a Struct when you need a fixed set of attributes.
* Use hashes when attributes might later be added or removed.
* Structs in C have little or nothing to do with Ruby Structs, so don't get confused by that.
