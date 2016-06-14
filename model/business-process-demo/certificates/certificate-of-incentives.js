'use strict';

var db                      = require('../../../db')
  , FormSection             = require('eregistrations/model/form-section')(db)
  , CertificateOfIncentives = require('../../documents/certificate-of-incentives');

module.exports = CertificateOfIncentives;

CertificateOfIncentives.prototype.defineProperties({
	dataForm: { type: FormSection },
	isToBeHanded: { value: true }
});

CertificateOfIncentives.prototype.dataForm.setProperties({
	label: function () { return this.propertyMaster.label; },
	disablePartialSubmit: true,
	propertyMasterType: CertificateOfIncentives,
	propertyNames: ['number', 'files/map', 'issueDate']
});
