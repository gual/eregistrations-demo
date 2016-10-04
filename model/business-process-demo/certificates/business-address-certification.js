'use strict';

var db                           = require('../../../db')
  , FormSection                  = require('eregistrations/model/form-section')(db)
  , BusinessAddressCertification = require('../../documents/business-address-certification');

module.exports = BusinessAddressCertification;

BusinessAddressCertification.prototype.defineProperties({
	dataForm: { type: FormSection },
	processingStep: { value: function () { return this.master.processingSteps.map.processing; } },
	isToBeHanded: { value: true }
});

BusinessAddressCertification.prototype.dataForm.setProperties({
	label: function () { return this.propertyMaster.label; },
	disablePartialSubmit: true,
	actionUrl: function () { return this.master.__id__ + '/certificate/business-address-certification'; },
	propertyMasterType: BusinessAddressCertification,
	propertyNames: ['files/map', 'issueDate']
});
