'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n')
  , ProcessingStep      = require('eregistrations/model/processing-step')(db)
  , BusinessProcessDemo = require('./base')
  , processing;

BusinessProcessDemo.prototype.processingSteps.map.defineProperties({
	processing: { type: ProcessingStep, nested: true }
});

processing = BusinessProcessDemo.prototype.processingSteps.map.processing;

processing.setProperties({
	label: _("Processing"),
	previousSteps: function () { return [this.owner.revision]; },
	approvalProgress: function (_observe) {
		var weight = 0, statusSum = 0;
		_observe(this.master.certificates.applicable).forEach(function (cert) {
			var certFormWeight = _observe(cert.dataForm._weight);
			weight += certFormWeight;
			statusSum += _observe(cert.dataForm._status) * certFormWeight;
		});
		if (!weight) return 1;
		return statusSum / weight;
	}
});

processing.certificates.set('released', function (_observe) {
	var certificates = this.master.certificates
	  , result       = [];

	if (_observe(certificates.released).has(certificates.map.certificateOfIncentives)) {
		result.push(certificates.map.certificateOfIncentives);
	}

	return result;
});

processing.requirementUploads.set('applicable', function (_observe) {
	var requirementUploads = this.master.requirementUploads
	  , result             = [];

	if (_observe(requirementUploads.applicable).has(requirementUploads.map.businessPlan)) {
		result.push(requirementUploads.map.businessPlan);
	}

	if (requirementUploads.applicable.has(requirementUploads.map.companyRegistration)) {
		result.push(requirementUploads.map.companyRegistration);
	}

	return result;
});

module.exports = BusinessProcessDemo;
