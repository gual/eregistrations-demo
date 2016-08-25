'use strict';

var db                       = require('../../../db')
  , RevisionProcessingStep   = require('eregistrations/model/processing-steps/revision')(db)
  , BusinessProcessFinalTest = require('./base');

BusinessProcessFinalTest.prototype.processingSteps.map.defineProperties({
	revision: { type: RevisionProcessingStep, nested: true }
});

module.exports = BusinessProcessFinalTest;
