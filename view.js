'use strict';
var fs = require('fs');
var Handlebars = require('handlebars');
var marked = require('marked');
var moment = require('moment');

Handlebars.registerPartial('issue', fs.readFileSync('./views/issue.hbs', { encoding: 'utf-8' }));

Handlebars.registerHelper('date', function(date) {
  var dateString = moment(date).format('YYYY-MM-DD');
  return new Handlebars.SafeString(dateString);
});

Handlebars.registerHelper('markdown', function(markdown) {
  return new Handlebars.SafeString(marked(markdown));
});

var template = Handlebars.compile(fs.readFileSync('./views/layout.hbs', { encoding: 'utf-8' }));

module.exports = template;