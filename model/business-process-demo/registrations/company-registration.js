'use strict';

var BusinessProcessDemo = require('../base');

BusinessProcessDemo.prototype.registrations.map.defineProperties({
	companyRegistration: { nested: true }
});

BusinessProcessDemo.prototype.registrations.map.companyRegistration.setProperties({
	Document: require('../../documents/company-registration'),
	costs: function (_observe) {
		var workers  = this.master._get
			? _observe(this.master._workers) : this.master.workers;
		if (!workers) return;
		return [this.master.costs.map.companyRegistration];
	},
	requirements: function () {
		var requirementsMap = this.master.requirements.map;
		return [requirementsMap.inventory, requirementsMap.passport, requirementsMap.attorneyId];
	}
});
