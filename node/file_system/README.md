##### Read a directory
First, require the filesystem module.  
`var fs = require('fs');`

##### Synchronously
Then, read a directory.  
```
fs.readdirSync('./dirname');
```
readdirSync is *synchronous*. It's synchronous because it runs along with the script, meaning, no other code can execute until the file has been read.

_BE CAREFUL:_ This will block the single NodeJS thread, so all other connections will have to wait for this one call. If this file is huge, this could cause a script to seem to become unresponsive and could confuse users. And, even if the user is aware that something is loading, can we let them continue to interact with the script in other ways without requiring them to wait on this one operation?

##### Asynchronously
```
var fs = require('fs');
fs.readdir('./dirname');
```
readdir is *asynchronous*. This means that the file will be read in without blocking the rest of our script from executing.

The second, asynchronous way is more advantageous because we don't need to wait for the file to be read before continuing. However, it depends on what we want to do. If we have a small file, we may want to read it in synchronously before continuing with the script, because we want to do something with the data right away.

##### Callbacks
In the case of asynchronous operations, we'll often use *callbacks*, usually with an anonymous function that is run when the asynchronous operation completes.

##### AJAX uses sync and async, too
The concept of synchronous and asynchronous operations is also important when talking about AJAX, which stands for _*Asynchronous* JavaScript and XML_. Whether we're reading from our own filesystem, or from another server, the concept is the same.
