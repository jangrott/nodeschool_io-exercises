var fs = require('fs');
var path = require('path');

var dirname = process.argv[2];
var extension = process.argv[3];

fs.readdir(dirname, function(err, files) {
  files.filter(function(file) {
    if(path.extname(file).substr(1) === extension) {
      console.log(file);
    }
  })
});
