// Controller for both server and client.

'use strict';

var assign          = require('es5-ext/object/assign')
  , officialMatcher = require('eregistrations/controller/utils/official-matcher')
  , edcProcessingMatcher;

edcProcessingMatcher = function (businessProcessId) {
	return officialMatcher.call(this, businessProcessId, 'edcProcessing');
};

assign(exports, require('eregistrations/controller/user'));

exports['[0-9][a-z0-9]+/certificate/[a-z][-a-z0-9]+'] =
	require('eregistrations/controller/utils/official-certificate')('edcProcessing');

exports['[0-9][a-z0-9]+/edc-processing-form'] = {
	match: edcProcessingMatcher
};

exports['[0-9][a-z0-9]+/validate'] = {
	match: function (businessProcessId) {
		if (!edcProcessingMatcher.call(this, businessProcessId)) return false;

		return this.processingStep.approvalProgress === 1;
	},
	validate: Function.prototype,
	submit: function () {
		this.processingStep.processor = this.user;
		this.processingStep.officialStatus = 'approved';
	},
	redirectUrl: '/'
};
