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
	previousSteps: function () { return [this.owner.revision]; }
});

module.exports = BusinessProcessDemo;
