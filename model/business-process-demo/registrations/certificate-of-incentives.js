'use strict';

var BusinessProcessDemo = require('../base');

BusinessProcessDemo.prototype.registrations.map.defineProperties({
	certificateOfIncentives: { nested: true }
});

BusinessProcessDemo.prototype.registrations.map.certificateOfIncentives.setProperties({
	Document: require('../../documents/certificate-of-incentives')
});
