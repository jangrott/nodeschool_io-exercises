var http = require('http');
var map  = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
  if (req.method != 'POST') {
    res.end('only POST requests are supported\n')
  }

  req.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});
server.listen(port);
