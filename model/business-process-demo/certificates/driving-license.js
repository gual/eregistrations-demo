'use strict';

var DrivingLicense = require('../../documents/driving-license');

module.exports = DrivingLicense;

DrivingLicense.prototype.defineProperties({
	isToBeHanded: { value: true }
});
