'use strict';

var db                  = require('../../../db')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , EregistrationsDeveloperCertificate =
		require('../../documents/eregistrations-developer-certificate');

module.exports = EregistrationsDeveloperCertificate;

EregistrationsDeveloperCertificate.prototype.defineProperties({
	dataForm: { type: FormSection },
	isToBeHanded: { value: true }
});

EregistrationsDeveloperCertificate.prototype.dataForm.setProperties({
	label: function () { return this.propertyMaster.label; },
	disablePartialSubmit: true,
	propertyMasterType: EregistrationsDeveloperCertificate,
	propertyNames: ['number', 'files/map', 'issueDate']
});
