var http = require('http');
var url = require('url');

var port = process.argv[2];

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var time = new Date(parsedUrl.query.iso);

  var output = '';
  switch (parsedUrl.pathname) {
    case '/api/parsetime':
      output = parsetime(time);
      break;
    case '/api/unixtime':
      output = unixtime(time);
      break;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(output));
});
server.listen(port);
