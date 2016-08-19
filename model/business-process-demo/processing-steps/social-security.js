'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n')
  , ProcessingStep      = require('eregistrations/model/processing-step')(db)
  , BusinessProcessDemo = require('./base');

BusinessProcessDemo.prototype.processingSteps.map.defineProperties({
	socialSecurity: { type: ProcessingStep, nested: true }
});

BusinessProcessDemo.prototype.processingSteps.map.socialSecurity.setProperties({
	label: _("Social Security"),
	previousSteps: function () { return [this.owner.revision]; },
	isApplicable: function (_observe) {
		var requirementUploads = this.master.requirementUploads;
		return _observe(requirementUploads.applicable).has(
			requirementUploads.map.socialSecurityCertificate
		);
	}
});

module.exports = BusinessProcessDemo;
