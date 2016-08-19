'use strict';

var db                = require('../../../db')
  , _                 = require('../../../i18n').bind('Official: Revision: Status Log')
  , businessProcesses =
		db.BusinessProcessDemo.instances.filterByKey('isFromEregistrations', true)
  , progressPath = 'processingSteps/map/revision/revisionProgress';

module.exports = exports =
	require('eregistrations/status-logs/official-revision')(db.BusinessProcessDemo);

exports.push({
	id: 'revision-in-progress',
	preTrigger: businessProcesses.filterByKeyPath(progressPath, 0),
	trigger: businessProcesses.filterByKeyPath(progressPath, function (progress) {
		return progress > 0;
	}),
	label: _("Review in progress"),
	text: _("A review of your request has been started")
});
