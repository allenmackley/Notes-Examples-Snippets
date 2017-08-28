const path = require('path');
const util = require('util');
const v8 = require('v8');
//__filename gets the filename (core.js)
console.log( path.basename(__filename) );
//__dirname gets the path (/path/to/app/folder/node/modules/core.js)
console.log( __dirname );
//path.join(), joins a path together. (Same as Ruby's File.join())
dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
// console.log(dirUploads);
//util.log() adds a timestamp to the log
util.log(dirUploads);
//shows up memory usage statistics
util.log(v8.getHeapStatistics());
