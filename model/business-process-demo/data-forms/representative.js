'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n').bind('Company: Model: Sections')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , BusinessProcessDemo = require('../base')

  , representative;

BusinessProcessDemo.prototype.dataForms.map.define('representative', {
	nested: true,
	type: FormSection
});

representative = BusinessProcessDemo.prototype.dataForms.map.representative;

representative.setProperties({
	label: _("Company's representative"),
	pageUrl: 'representative',
	actionUrl: 'representative-information',
	propertyNames: ['representative/firstName', 'representative/lastName', 'representative/email']
});
