//Getting a node.js server up and running is extremely simple. This example shows the long way of doing it and there are packages that make all of this even simpler.

//require the http module
const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';
//create a server object
const server = http.createServer();
//on every http requst, run this...
server.on('request', (req, res) => {
  //If the request has an error, set status code 400
  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  //We put an error event on the request, but we also need one on the response.
  res.on('error', (err) => {
    console.error(err);
  });

  //We can handle specific request methods and urls
  if ( req.method === 'GET' && req.url === '/echo' ) {
    const { headers, method, url } = req;
    const userAgent = headers['user-agent'];

    let body = [];

    req.on('data', (chunk) => {
      //as the data streams in, it gets pushed onto the body array
      body.push(chunk);
    }).on('end', () => {
      //take the body array, add it to the buffer, and convert it to a string
      body = Buffer.concat(body).toString();
      // At this point, we have the headers, method, url and body, and can now do whatever we need to in order to respond to this request.

      //we need to make sure to set the status code
      // res.statusCode = 200;

      //this could also be something like "application/json" or "text/html" or semething else
      // res.setHeader('Content-Type', 'text/plain');

      //we can also set status code and headers more convientely, this way:
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      //Now we're ready to start writing response data, so we could do this...
      // res.write('<html>');
      // res.write('<body>');
      // res.write('<h1>Hello, World!</h1>');
      // res.write('</body>');
      // res.write('</html>');

      //Or, simply, this...
      res.end('<html><body><h1>Hello, World!</h1></body></html>');
      //In the case of a POST, the body would actuall contain some data, so we could sanitize and parse that data, maybe query a database, etc., and decide on what to do with it before deliverying a response, just lke we would with a web framework.
    });
  //If not a GET, we'll say 404 for Not Found
  } else {
    res.statusCode = 404;
    res.end();
  }
});

//listen on it at port and host
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
