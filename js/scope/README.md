### Function Scope
##### Wrong way...
    for (var i = 0; i < 5; i++) {
      console.log(i)
      var btn = document.createElement('button');
      btn.appendChild(document.createTextNode('Button ' + i));
      btn.addEventListener('click', function() {
          alert(i);
      });
      document.body.appendChild(btn);
    }

The problem with the above is that `i` exists within the scope of the `window` (or whatever higher level function that might be scoped above this code). Each time the `for` loop runs, `i` is incremented and changed. `i` is global. Therefore, once the click event occurs, and anonymous function bound to it is run, and `i` is always `5`.  

##### Old school way before .bind() was available...
    for (var i = 0; i < 5; i++) {
      console.log(i)
      var btn = document.createElement('button');
      btn.appendChild(document.createTextNode('Button ' + i));
      (function(i) {
        btn.addEventListener('click', function() {
          alert(i);
        });
      })(i);
      document.body.appendChild(btn);
    }

This solution creates a wrapper function around the event listener, passing in `i`. Therefore, we receive a new, local variable `i` within the wrapping function on each iteration of the loop. This was what we had to do before `.bind()` became available in ECMAScript.

##### With `.bind()`...
    for (var i = 0; i < 5; i++) {
      console.log(i)
      var btn = document.createElement('button');
      btn.appendChild(document.createTextNode('Button ' + i));
      btn.addEventListener('click', function(i) {
        alert(i);
      }).bind(this, i);
      document.body.appendChild(btn);
    }

In this solution, we redefine the scope of the anonymous function to that of the `window` and pass in `i`. Redefining the function scope to the next highest scope is not actually necessary for this example, although often when defining event handlers like this it is the cleanest pattern. However, `.bind()` will also return a new function with a local version of `i` and so we essentially get the same result as what was done above, but this time it's written cleaner, and is internal to the JavaScript engine.

##### Now with ES6 and the `let` keyword...
    for (let i = 0; i < 5; i++) {
      console.log(i)
      var btn = document.createElement('button');
      btn.appendChild(document.createTextNode('Button ' + i));
      btn.addEventListener('click', function() {
        alert(i);
      });
      document.body.appendChild(btn);
    }

ECMAScript 6 has the new `let` keyword. `let` defines a variable within the scope of its block, instead of `var`, which defines a variable within the scope of its enclosing function.  This works because the interpreter translates the block for the `for` loop (in this case) as if there were 5 blocks. And using `let` sets each block with its own copy of `i`. Therefore, when the event is triggered and `alert(i)` is called, it will use the version of `i` relative to its own block instead of the `window`.
