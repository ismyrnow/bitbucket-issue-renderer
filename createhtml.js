'use strict';
var fs = require('fs');
var _ = require('lodash');
var db = require('./db');
var renderView = require('./view');
var stream = fs.createWriteStream('./output/index.html');

console.log('rendering html');
stream.once('open', function (fd) {
  db.issues.find({}).sort({ created_on: 1 }).exec(function (err, issues) {
    
    // Sort issue comments
    issues.forEach(function (issue) {
      issue.comments = _.sortBy(issue.comments, 'created_on');
    });
    
    var html = renderView({ issues: issues });
    stream.write(html);
    stream.end();
    
  });
});