var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, content) {
  console.log(getNumberOfNewLines(content));
});

function getNumberOfNewLines(content) {
  return content.split('\n').length - 1;
}
