'use strict';

module.exports = {
	ensureEmailNotTaken:
		require('eregistrations/server/services/query-master/queries/ensure-email-not-taken')(),
	loadInitialBusinessProcesses: require(
		'eregistrations/server/services/query-master/queries/load-initial-business-processes'
	)()
};
