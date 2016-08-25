'use strict';

var _ = require('../../../i18n')

  , BusinessProcessFinalTest = require('../base');

module.exports = BusinessProcessFinalTest;

BusinessProcessFinalTest.prototype.costs.map.define('eregistrationsDeveloperCertificate', {
	nested: true
});

BusinessProcessFinalTest.prototype.costs.map.eregistrationsDeveloperCertificate.setProperties({
	label: _("Eregistrations Developer Certificate"),
	amount: function (_observe) {
		var businessProcess     = this.master
		  , base                = 5
		  , programmingLanguage =
				businessProcess._get ?
					_observe(businessProcess._programmingLanguage) :
					businessProcess.programmingLanguage
		  , yearsOfExperience   =
				businessProcess._get ?
					_observe(businessProcess._yearsOfExperience) : businessProcess.yearsOfExperience;

		if (programmingLanguage === 'javaScript') return 0;

		return yearsOfExperience * base;
	}
});
