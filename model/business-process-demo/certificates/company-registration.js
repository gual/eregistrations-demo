'use strict';

var db                  = require('../../../db')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , CompanyRegistration = require('../../documents/company-registration');

module.exports = CompanyRegistration;

CompanyRegistration.prototype.defineProperties({
	dataForm: { type: FormSection },
	isToBeHanded: { value: true }
});

CompanyRegistration.prototype.dataForm.setProperties({
	label: function () { return this.propertyMaster.label; },
	disablePartialSubmit: true,
	propertyMasterType: CompanyRegistration,
	propertyNames: ['number', 'files/map', 'issueDate']
});
