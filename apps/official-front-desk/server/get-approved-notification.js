'use strict';

var _  = require('../../../i18n').bind('Official: Front Desk');

module.exports = function (businessProcesses) {
	return {
		preTrigger: businessProcesses.filterByKeyPath('processingSteps/map/frontDesk/isReady', true),
		trigger: businessProcesses.filterByKeyPath('processingSteps/map/frontDesk/isApproved', true),
		resolveGetters: true,
		variables: {
			fullName: function () {
				return this.businessProcess.user.fullName;
			},
			businessName: function () {
				return this.businessProcess.businessName;
			},
			officialFullName: function () {
				return this.businessProcess.processingSteps.map.frontDesk.processor.fullName;
			}
		},
		subject: _("M24 Documents delivered successfully"),
		text: _("Email message greeting ${ fullName }") + "\n\n"
			+ _("M24 Front Desk finished\n\n"
				+ "Name of company: ${ businessName }\n\n"
				+ "Name of official: ${ officialFullName }")
	};
};
