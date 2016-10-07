'use strict';

var db                   = require('../../../db')
  , FormSection          = require('eregistrations/model/form-section')(db)
  , CompanyIncorporation = require('../../documents/company-incorporation');

module.exports = CompanyIncorporation;

CompanyIncorporation.prototype.defineProperties({
	dataForm: { type: FormSection },
	processingStep: { value: function () { return this.master.processingSteps.map.processing; } },
	isToBeHanded: { value: false }
});

CompanyIncorporation.prototype.dataForm.setProperties({
	label: function () { return this.propertyMaster.label; },
	disablePartialSubmit: true,
	actionUrl: function () { return this.master.__id__ + '/certificate/company-incorporation'; },
	propertyMasterType: CompanyIncorporation,
	propertyNames: ['number', 'issueDate']
});
