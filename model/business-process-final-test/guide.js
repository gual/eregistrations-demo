// Configuration of guide form section.

'use strict';

var db          = require('../../db')
  , FormSection = require('eregistrations/model/form-section')(db)
  , BusinessProcessFinalTest = require('./fields');

require('eregistrations/model/business-process-new/guide')(db);

BusinessProcessFinalTest.prototype.getOwnDescriptor('determinants').type = FormSection;

BusinessProcessFinalTest.prototype.determinants.setProperties({
	disablePartialSubmit: true,
	propertyNames: []
});

module.exports = BusinessProcessFinalTest;
