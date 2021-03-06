var pg = require('pg');

var query = function(connectionString, query, params, callback) {
  // handle case where params are omitted
  if (arguments.length === 3) {
    callback = params;
    params = [];
  }

  pg.connect(connectionString, function(err, client) {
    if (err) {
      console.error('Error connecting to postgreSQL:' + err);
      return callback (err);
    }
    client.query(query, params, function(err, results) {
      if (err) {
        console.error('Error executing postgreSQL query:' + err);
        return callback (err);
      }
      callback(null, results);
    });
  });
};

module.exports = function () {
  return {
    pg: pg, //expose postgreSQL module
    query: query //expose query helper
  };
};

