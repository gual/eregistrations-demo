'use strict';

var BusinessProcessDemo = require('../base');

BusinessProcessDemo.prototype.registrations.map.defineProperties({
	certificateOfIncentives: { nested: true }
});

BusinessProcessDemo.prototype.registrations.map.certificateOfIncentives.setProperties({
	Document: require('../../documents/certificate-of-incentives'),
	isApplicable: function (_observe) {
		var businessProcess = this.master
		  , assets  = businessProcess._get ? _observe(businessProcess._assets) : businessProcess.assets;

		return assets >= 5000;
	},
	costs: function (_observe) {
		return [
			this.master.costs.map.certificateOfIncentives
		];
	},
	requirements: function (_observe) {
		var requirementsMap = this.master.requirements.map, workers, result = [];
		result.push(requirementsMap.companyRegistration);
		workers = this._get ? _observe(this.master._workers) : this.master.workers;
		if (workers > 5) {
			result.push(requirementsMap.businessPlan);
		}
		return result;
	}
});
