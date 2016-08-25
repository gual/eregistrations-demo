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
	}
});
