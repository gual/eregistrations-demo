'use strict';

var _                  = require('../../../i18n')
  , businessProcesses  = require('../../../apps-common/business-processes/submitted/demo')
  , socialSecurityPath = 'processingSteps/map/socialSecurity/';

module.exports = [{
	preTrigger:
		businessProcesses.filterByKeyPath(socialSecurityPath + 'isPending', true),
	trigger: businessProcesses.filterByKeyPath(socialSecurityPath + 'isApproved', true),
	official: socialSecurityPath + 'processor',
	label: _("Social Security"),
	text: _("Approved by social security")
}];
