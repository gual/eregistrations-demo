'use strict';

var CompanyRegistration = require('../../documents/company-registration');

module.exports = CompanyRegistration;

CompanyRegistration.prototype.defineProperties({
	isToBeHanded: { value: true }
});
