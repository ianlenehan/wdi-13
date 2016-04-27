var fs = require('fs');

module.exports = function (directory, extension, callback) {
  var extension = '.' + extension;

  fs.readdir(directory, function (err, data) {
    if (err) return callback(err);

    data = data.filter(function (file) {
      if (file.length > fileType.length) {
      return file.endsWith(fileType);
    } // was also returning file "md" and file ""
    });

    callback(null, data);
  });
};
