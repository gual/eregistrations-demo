'use strict';

var db                     = require('../../../db')
  , _                      = require('../../../i18n')
  , ProcessingStep = require('eregistrations/model/processing-step')(db)
  , BusinessProcessDemo    = require('./base');

BusinessProcessDemo.prototype.processingSteps.map.defineProperties({
	processing: { type: ProcessingStep, nested: true }
});

BusinessProcessDemo.prototype.processingSteps.map.processing.setProperties({
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

module.exports = BusinessProcessDemo;
