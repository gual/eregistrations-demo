'use strict';

var db                       = require('../../../db')
  , _                        = require('../../../i18n')
  , FrontDeskProcessingStep  = require('eregistrations/model/processing-steps/front-desk')(db)
  , BusinessProcessFinalTest = require('./base');

BusinessProcessFinalTest.prototype.processingSteps.map.defineProperties({
	frontDesk: { type: FrontDeskProcessingStep, nested: true }
});

BusinessProcessFinalTest.prototype.processingSteps.map.frontDesk.setProperties({
	label: _("Front Desk"),
	isApplicable: true,
	previousSteps: function () { return [this.owner.edcProcessing]; }
});

module.exports = BusinessProcessFinalTest;
