// Initialisation of in-memory database engine used across process

'use strict';

var db = module.exports = require('eregistrations/db');

var Password = require('dbjs-ext/string/string-line/password')(db);

Password.setProperties({
	min: 8
});

db.locale = 'en-GB';
