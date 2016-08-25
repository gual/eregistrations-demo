'use strict';

var db                  = require('../../../db')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , EregistrationsDeveloperCertificate =
		require('../../documents/eregistrations-developer-certificate');

module.exports = EregistrationsDeveloperCertificate;

EregistrationsDeveloperCertificate.prototype.defineProperties({
	dataForm: { type: FormSection },
	processingStep: { value: function () { return this.master.processingSteps.map.edcProcessing; } },
	isToBeHanded: { value: true }
});

EregistrationsDeveloperCertificate.prototype.dataForm.setProperties({
	label: function () { return this.propertyMaster.label; },
	disablePartialSubmit: true,
	actionUrl: function () { return this.master.__id__ +
		'/certificate/eregistrations-developer-certificate'; },
	propertyMasterType: EregistrationsDeveloperCertificate,
	propertyNames: ['number', 'files/map', 'issueDate']
});
