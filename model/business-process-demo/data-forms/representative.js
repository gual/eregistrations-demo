'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , BusinessProcessDemo = require('../fields');

BusinessProcessDemo.prototype.dataForms.map.define('representative', {
	nested: true,
	type: FormSection
});

BusinessProcessDemo.prototype.dataForms.map.representative.setProperties({
	label: _("Company's representative"),
	actionUrl: 'representative',
	propertyNames: ['representative/firstName', 'representative/lastName',
		'representative/email']
});

module.exports = BusinessProcessDemo;
