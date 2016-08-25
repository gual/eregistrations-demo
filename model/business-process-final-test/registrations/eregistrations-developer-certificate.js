'use strict';

var BusinessProcessFinalTest = require('../base')
  , finalTestRegistrationsMap;

finalTestRegistrationsMap = BusinessProcessFinalTest.prototype.registrations.map;

finalTestRegistrationsMap.defineProperties({
	eregistrationsDeveloperCertificate: { nested: true }
});

finalTestRegistrationsMap.eregistrationsDeveloperCertificate.setProperties({
	Document: require('../../documents/eregistrations-developer-certificate'),
	costs: function () {
		return [this.master.costs.map.eregistrationsDeveloperCertificate];
	},
	requirements: function (_observe) {
		var requirementsMap = this.master.requirements.map, result = [],
			hasDegreeInComputerScience, isTrainingAbroad;

		result.push(requirementsMap.passport);

		hasDegreeInComputerScience = this.master._get ?
				_observe(this.master._hasDegreeInComputerScience) :
				this.master.hasDegreeInComputerScience;

		isTrainingAbroad = this.master._get ? _observe(this.master._isTrainingAbroad) :
				this.master.isTrainingAbroad;

		if (hasDegreeInComputerScience) {
			result.push(requirementsMap.graduationDiploma);
		}

		if (isTrainingAbroad) {
			result.push(requirementsMap.transportationTicket);
		}

		return result;
	}
});
