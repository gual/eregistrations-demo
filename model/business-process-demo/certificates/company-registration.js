'use strict';

var db                  = require('../../../db')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , CompanyRegistration = require('../../documents/company-registration');

module.exports = CompanyRegistration;

CompanyRegistration.prototype.defineProperties({
	dataForm: { type: FormSection },
	processingStep: { value: function () { return this.master.processingSteps.map.processing; } }
});

CompanyRegistration.prototype.dataForm.setProperties({
	label: function () { return this.propertyMaster.label; },
	disablePartialSubmit: true,
	actionUrl: function () { return this.master.__id__ + '/certificate/company-registration'; },
	propertyMasterType: CompanyRegistration,
	propertyNames: ['number', 'files/map', 'issueDate']
});
