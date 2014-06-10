'use strict';
var Datastore = require('nedb');
var db = {
  issues: new Datastore({ filename: './output/issues.db', autoload: true })
};

db.issues.ensureIndex({ fieldName: 'id' });

module.exports = db;