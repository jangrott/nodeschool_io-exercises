var extensionFilter = require('./FilterModule');

var dirname = process.argv[2];
var extension = process.argv[3];

extensionFilter(dirname, extension, function(err, files) {
  if (err) {
    return console.log(err);
  }
  files.forEach(function(file) {
    console.log(file);
  });
});
