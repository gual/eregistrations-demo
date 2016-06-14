// Controller for both server and client.

'use strict';

var assign          = require('es5-ext/object/assign')
  , officialMatcher = require('eregistrations/controller/utils/official-matcher');

assign(exports, require('eregistrations/controller/user'));

exports['[0-9][a-z0-9]+/certificate/[a-z][-a-z0-9]+'] =
	require('eregistrations/controller/utils/official-certificate')('processing');

exports['[0-9][a-z0-9]+/validate'] = {
	match: function (businessProcessId) {
		if (!officialMatcher.call(this, businessProcessId, 'processing')) return false;

		return this.processingStep.approvalProgress === 1;
	},
	validate: Function.prototype,
	submit: function () {
		this.processingStep.processor = this.user;
		this.processingStep.officialStatus = 'approved';
	},
	redirectUrl: '/'
};
