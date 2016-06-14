'use strict';

var BusinessProcessDemo = require('../base');

BusinessProcessDemo.prototype.registrations.map.defineProperties({
	companyRegistration: { nested: true }
});

BusinessProcessDemo.prototype.registrations.map.companyRegistration.setProperties({
	Document: require('../../documents/company-registration')
});
