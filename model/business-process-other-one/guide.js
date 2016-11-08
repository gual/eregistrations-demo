// Configuration of guide form section.

'use strict';

var db          = require('../../db')
  , FormSection = require('eregistrations/model/form-section')(db)
  , BusinessProcessOtherOne = require('./fields');

require('eregistrations/model/business-process-new/guide')(db);

BusinessProcessOtherOne.prototype.getOwnDescriptor('determinants').type = FormSection;

BusinessProcessOtherOne.prototype.determinants.setProperties({
	disablePartialSubmit: true,
	propertyNames: []
});

module.exports = BusinessProcessOtherOne;
