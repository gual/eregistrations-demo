'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n')
  , ProcessingStep      = require('eregistrations/model/processing-step')(db)
  , BusinessProcessDemo = require('./base')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , DateType            = require('dbjs-ext/date-time/date')(db)
  , socialSecurityStep;

BusinessProcessDemo.prototype.processingSteps.map.defineProperties({
	socialSecurity: { type: ProcessingStep, nested: true }
});

socialSecurityStep = BusinessProcessDemo.prototype.processingSteps.map.socialSecurity;

socialSecurityStep.defineProperties({
	isSealConfirmed: {
		type: db.Boolean,
		label: _("Is the seal of the certificate confirmed"),
		required: true
	},
	sealDate: {
		type: DateType,
		label: _("When was the document sealed"),
		required: true
	}
});

socialSecurityStep.setProperties({
	label: _("Social Security"),
	previousSteps: function () { return [this.owner.revision]; },
	isApplicable: function (_observe) {
		var requirementUploads = this.master.requirementUploads;
		return _observe(requirementUploads.applicable).has(
			requirementUploads.map.socialSecurityCertificate
		);
	}
});

socialSecurityStep.getOwnDescriptor('dataForm').type = FormSection;

socialSecurityStep.dataForm.setProperties({
	actionUrl: function () {
		return this.master.__id__ + '/social-security-form';
	},
	label: _("Seal confirmation"),
	propertyMasterType: socialSecurityStep.constructor,
	propertyNames: ['isSealConfirmed', 'sealDate']
});

module.exports = BusinessProcessDemo;
