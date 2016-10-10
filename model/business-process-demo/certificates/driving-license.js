'use strict';

var db             = require('../../../db')
  , FormSection    = require('eregistrations/model/form-section')(db)
  , DrivingLicense = require('../../documents/driving-license');

module.exports = DrivingLicense;

DrivingLicense.prototype.defineProperties({
	dataForm: { type: FormSection },
	processingStep: { value: function () { return this.master.processingSteps.map.processing; } },
	isToBeHanded: { value: true }
});

DrivingLicense.prototype.dataForm.setProperties({
	label: function () { return this.propertyMaster.label; },
	disablePartialSubmit: true,
	actionUrl: function () { return this.master.__id__ + '/certificate/driving-license'; },
	propertyMasterType: DrivingLicense,
	propertyNames: ['number', 'files/map', 'issueDate']
});
