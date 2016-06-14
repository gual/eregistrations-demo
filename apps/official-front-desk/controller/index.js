// Controller for both server and client.

'use strict';

var assign          = require('es5-ext/object/assign')
  , officialMatcher = require('eregistrations/controller/utils/official-matcher');

assign(exports, require('eregistrations/controller/user'));

// Approve registration.
exports['[0-9][a-z0-9]+/approve'] = {
	match: function (businessProcessId) {
		if (!officialMatcher.call(this, businessProcessId, 'frontDesk')) return;
		return this.processingStep.approvalProgress === 1;
	},
	validate: Function.prototype,
	submit: function () {
		this.processingStep.processor = this.user;
		this.processingStep.officialStatus = 'approved';
	},
	redirectUrl: '/'
};

// Approve uploads and certs handing
exports['[0-9][a-z0-9]+/validate-docs'] = {
	formHtmlId: 'docs-validation',
	match: function (businessProcessId) {
		return officialMatcher.call(this, businessProcessId, 'frontDesk');
	}
};
