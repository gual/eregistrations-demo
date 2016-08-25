'use strict';

var db                       = require('../../../db')
  , _                        = require('../../../i18n')
  , FormSection              = require('eregistrations/model/form-section')(db)
  , BusinessProcessFinalTest = require('../fields');

BusinessProcessFinalTest.prototype.dataForms.map.define('personalInformation', {
	nested: true,
	type: FormSection
});

BusinessProcessFinalTest.prototype.dataForms.map.personalInformation.setProperties({
	label: _("Personal Information"),
	actionUrl: 'personal-information',
	propertyNames: ['businessName', 'hobby', 'birthDate']
});

module.exports = BusinessProcessFinalTest;
