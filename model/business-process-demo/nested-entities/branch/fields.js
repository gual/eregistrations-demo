// Branch class declaration.

'use strict';

var db                  = require('../../../../db')
  , _                   = require('../../../../i18n').bind('Model: Branch')
  , StringLine          = require('dbjs-ext/string/string-line')(db)
  , Address             = require('../../../lib/address')
  , BusinessProcessDemo = require('../../base')
  , Branch;

require('dbjs-ext/create-enum')(db);

module.exports = Branch = db.Object.extend('Branch', {
	// Both label and name are needed by add-edit-entity view.
	label: {
		value: _("Branch")
	},
	name: {
		type: StringLine,
		value: function () {
			return this.businessName;
		}
	},

	businessName: {
		type: StringLine,
		required: true,
		label: _("Branch trade name")
	},
	address: {
		type: Address,
		nested: true
	}
});

BusinessProcessDemo.prototype.defineNestedMap('branches', {
	itemType: Branch,
	cardinalPropertyKey: 'businessName'
});
