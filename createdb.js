'use strict';
var fs = require('fs');
var JSONStream = require('JSONstream');
var db = require('./db');

// Read issues into database
console.log('streaming issues into db');
fs.createReadStream('db-1.0.json')
  .pipe(JSONStream.parse('issues.*'))
  .on('data', function(issue) {
    db.issues.insert(issue);
  })
  .on('end', addComments);

// Read comments into database (join them into existing issues)
function addComments() {
  console.log('joining comments into issues db');
  fs.createReadStream('db-1.0.json')
    .pipe(JSONStream.parse('comments.*'))
    .on('data', function(comment) {
      if (comment.content) {
        db.issues.update({ id: comment.issue }, { $push: { comments: comment } });
      }
    });
}