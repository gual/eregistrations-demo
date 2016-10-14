'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , BusinessProcessDemo = require('../fields')
  , getApplicablePropName = db.Object.getApplicablePropName;

BusinessProcessDemo.prototype.dataForms.map.define('companyInformation', {
	nested: true,
	type: FormSection
});

BusinessProcessDemo.prototype.dataForms.map.companyInformation.setProperties({
	label: _("Company Information"),
	actionUrl: 'company-information',
	propertyNames: ['businessName', 'address/country', 'address/city', 'address/street']
});

var isPoland = function () {
	return this.country === 'PL';
};

BusinessProcessDemo.prototype.address.set(getApplicablePropName('street'), isPoland);

BusinessProcessDemo.prototype.address.set(getApplicablePropName('city'), isPoland);

module.exports = BusinessProcessDemo;
