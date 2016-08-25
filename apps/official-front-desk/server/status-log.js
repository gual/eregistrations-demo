'use strict';

var _                          = require('../../../i18n').bind("Front Desk status log")
  , businessProcessesDemo      =
		require('../../../apps-common/business-processes/submitted/demo')
  , businessProcessesFinalTest =
		require('../../../apps-common/business-processes/submitted/final-test');

var getStatusLog = function (businessProcesses) {
	return [{
		preTrigger: businessProcesses,
		trigger: businessProcesses.filterByKeyPath('processingSteps/map/frontDesk/isPending', true),
		label: _("Withdrawal"),
		text: _("Certificates of entitlement are ready for withdrawal.")
	}, {
		preTrigger: businessProcesses.filterByKeyPath('processingSteps/map/frontDesk/isPending', true),
		trigger: businessProcesses.filterByKeyPath('processingSteps/map/frontDesk/isApproved', true),
		official: 'processingSteps/map/frontDesk/processor',
		label: _("Withdrawal"),
		text: _("Certificates withdrawn")
	}];
};

module.exports = getStatusLog(businessProcessesDemo)
	.concat(getStatusLog(businessProcessesFinalTest));
