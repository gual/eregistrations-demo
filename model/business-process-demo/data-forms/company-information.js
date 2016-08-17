'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , FormSectionGroup    = require('eregistrations/model/form-section-group')(db)
  , BusinessProcessDemo = require('../fields');

BusinessProcessDemo.prototype.dataForms.map.define('companyInformation', {
	nested: true,
	type: FormSectionGroup
});

var companyInformation = BusinessProcessDemo.prototype.dataForms.map.companyInformation;

companyInformation.setProperties({
	label: _("Company Information"),
	actionUrl: 'company-information'
});

companyInformation.sections.defineProperties({
	details: { type: FormSection, nested: true },
	address: { type: FormSection, nested: true }
});

companyInformation.sections.details.setProperties({
	propertyNames: ['businessName', 'expectedIncome']
});

companyInformation.sections.address.setProperties({
	label: _("Address"),
	propertyNames: ['address/country', 'address/city',
		'address/street']
});

module.exports = BusinessProcessDemo;
