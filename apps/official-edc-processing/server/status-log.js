'use strict';

var _                 = require('../../../i18n')
  , businessProcesses = require('../../../apps-common/business-processes/submitted/final-test');

module.exports = [{
	preTrigger: businessProcesses.filterByKeyPath('processingSteps/map/edcProcessing/isPending',
		true),
	trigger: businessProcesses.filterByKeyPath('processingSteps/map/edcProcessing/isApproved', true),
	official: 'processingSteps/map/edcProcessing/processor',
	label: _("EDC Processing"),
	text: _("Certificate issued")
}];
