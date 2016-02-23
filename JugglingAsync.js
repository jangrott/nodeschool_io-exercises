var http = require('http');
var bl = require('bl');

var count = 0;
var deferred = Promise.defer();
var results = {};
var urls = process.argv.slice(2);

urls.forEach(function(url) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
      results[url] = data.toString();
      count++;
      if (count == urls.length) {
        deferred.resolve();
      }
    }));
  });
})

deferred.promise.then(function() {
  urls.forEach(function(url) {
    console.log(results[url]);
  });
});
