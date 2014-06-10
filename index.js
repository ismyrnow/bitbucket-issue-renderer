'use strict';

var fs = require('fs');
var JSONstream = require('JSONstream');
var Datastore = require('nedb');
var db = {
  issues: new Datastore({ filename: 'issues.db', autoload: true }),
  comments: new Datastore({ filename: 'comments.db', autoload: true })
};

// Read issues into database
fs.createReadStream('db-1.0.json', { encoding: 'utf8' })
  .pipe(JSONStream.parse())
  .on('root', function(data) {
    console.log(data);
    db.issues.insert(data);
  });