// Configuration of guide form section.

'use strict';

var db          = require('../../db')
  , FormSection = require('eregistrations/model/form-section')(db)
  , BusinessProcessDemo   = require('./fields')
  , getApplicablePropName = db.Object.getApplicablePropName;

require('eregistrations/model/business-process-new/guide')(db);

BusinessProcessDemo.prototype.getOwnDescriptor('determinants').type = FormSection;

BusinessProcessDemo.prototype.determinants.setProperties({
	disablePartialSubmit: true,
	propertyNames: ['assets', 'workers']
});

BusinessProcessDemo.prototype.set(getApplicablePropName('workers'), function () {
	return this.assets > 2000;
});

module.exports = BusinessProcessDemo;
