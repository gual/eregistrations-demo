// Common fields declaration for business processes.

'use strict';

var db                  = require('../../db')
  , _                   = require('../../i18n')
  , UsDollar            = require('dbjs-ext/number/currency/us-dollar')(db)
  , UInteger            = require('dbjs-ext/number/integer/u-integer')(db)
  , Address             = require('../lib/address')
  , Person              = require('../lib/person')
  , BusinessProcessDemo = module.exports = require('./base');

BusinessProcessDemo.prototype.getOwnDescriptor('businessName').required = true;

BusinessProcessDemo.prototype.defineProperties({
	assets: {
		type: UsDollar,
		label: _("Assets"),
		min: 1000,
		step: 1,
		required: true
	},
	workers: {
		type: UInteger,
		label: _("Number of employees"),
		max: 100
	},
	address: {
		type: Address,
		nested: true
	},
	attorney: {
		type: Person,
		nested: true
	}
});
