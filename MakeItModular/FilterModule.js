var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extension, callback) {
  fs.readdir(dirname, function(err, files) {
    if (err) {
      return callback(err);
    }
    var filteredFiles = files.filter(function(file) {
      if(path.extname(file).substr(1) === extension) {
        return file;
      }
    })
    callback(null, filteredFiles);
  });
}
