'use strict';

var defineRequirements =
	require('eregistrations/model/business-process-new/utils/define-requirements');
var BusinessProcessDemo = require('./base')
  , _                   = require('../../i18n');

module.exports = defineRequirements(BusinessProcessDemo, [
	require('../documents/business-plan'),
	require('../documents/company-registration'),
	require('../documents/inventory'),
	require('../documents/passport')
]);

BusinessProcessDemo.prototype.requirements.map.define('attorneyId', {
	nested: true
});

BusinessProcessDemo.prototype.requirements.map.attorneyId.setProperties({
	label: _("Personal Id or passport of the attorney"),
	uploads: function (_observe) {
		var requirementUploadsMap = this.master.requirementUploads.map
		  , nationality           = _observe(this.master.attorney._nationality);

		if (!nationality) return [];

		if (nationality === 'AF') {
			return [requirementUploadsMap.attorneyPersonalId];
		}

		return [requirementUploadsMap.attorneyPassport];
	}
});
