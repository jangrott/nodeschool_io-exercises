var fs = require('fs');

var filename = process.argv[2];

var content = fs.readFileSync(filename, 'utf8');

function getNumberOfNewLines(content) {
  return content.split('\n').length - 1;
}

console.log(getNumberOfNewLines(content));
