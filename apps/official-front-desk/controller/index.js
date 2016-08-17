// Controller for Official Front Desk application (applies for both server and client).

'use strict';

// Common controller - login and password change.
module.exports = require('eregistrations/controller/official-front-desk')({
	stepName: function (businessProcess) {
		var step = businessProcess.processingSteps.map.frontDesk;
		if (step.institution === this.user.institution) return step;
	}
});
