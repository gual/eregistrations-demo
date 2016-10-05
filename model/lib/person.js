// Person entity extensions.

'use strict';

var db      = require('../../db')
  , _       = require('../../i18n').bind('Model: Person')
  , Person  = require('eregistrations/model/person')(db);

module.exports = Person;

Person.prototype.defineProperties({
	nationality: {
		type: db.Country,
		label: _("Nationality")
	}
});
