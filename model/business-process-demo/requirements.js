'use strict';

var defineRequirements =
	require('eregistrations/model/business-process-new/utils/define-requirements');
var BusinessProcessDemo = require('./base')
  , _                   = require('../../i18n').bind("Requirements");

module.exports = defineRequirements(BusinessProcessDemo, [
	require('../documents/business-plan'),
	require('../documents/company-registration'),
	require('../documents/inventory'),
	{
		legend: _("Both obverse and reverse"),
		class: require('../documents/passport')
	}
]);
