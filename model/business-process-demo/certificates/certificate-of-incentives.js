'use strict';

var db                      = require('../../../db')
  , FormSection             = require('eregistrations/model/form-section')(db)
  , CertificateOfIncentives = require('../../documents/certificate-of-incentives');

module.exports = CertificateOfIncentives;

CertificateOfIncentives.prototype.defineProperties({
	dataForm: { type: FormSection },
	processingStep: { value: function () { return this.master.processingSteps.map.processing; } },
	isToBeHanded: { value: true }
});

CertificateOfIncentives.prototype.dataForm.setProperties({
	label: function () { return this.propertyMaster.label; },
	disablePartialSubmit: true,
	actionUrl: function () { return this.master.__id__ + '/certificate/certificate-of-incentives'; },
	propertyMasterType: CertificateOfIncentives,
	propertyNames: ['number', 'files/map', 'issueDate']
});
