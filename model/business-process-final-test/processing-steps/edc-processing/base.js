'use strict';

var db                  = require('../../../../db')
  , _                   = require('../../../../i18n')
  , UInteger            = require('dbjs-ext/number/integer/u-integer')(db)
  , ProcessingStep      = require('eregistrations/model/processing-step')(db)
  , BusinessProcessFinalTest = require('../../base');

BusinessProcessFinalTest.prototype.processingSteps.map.defineProperties({
	edcProcessing: { type: ProcessingStep, nested: true }
});

var edcStep = BusinessProcessFinalTest.prototype.processingSteps.map.edcProcessing;

edcStep.defineProperties({
	score: {
		type: UInteger,
		max: 3,
		label: _("Certificate score")
	}
});

edcStep.setProperties({
	label: _("EDC Processing"),
	previousSteps: function () { return [this.owner.revision]; }
});

module.exports = BusinessProcessFinalTest;
