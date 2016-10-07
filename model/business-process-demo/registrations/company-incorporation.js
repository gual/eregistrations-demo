'use strict';

var BusinessProcessDemo = require('../base');

BusinessProcessDemo.prototype.registrations.map.defineProperties({
	companyIncorporation: { nested: true }
});

BusinessProcessDemo.prototype.registrations.map.companyIncorporation.setProperties({
	Document: require('../../documents/company-incorporation')
});
