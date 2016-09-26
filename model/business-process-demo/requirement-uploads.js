'use strict';

var BusinessProcessDemo = require('./base');
var defineRequirementUploads =
	require('eregistrations/model/business-process-new/utils/define-requirement-uploads')
  , _                        = require("../../i18n").bind("Requirement uploads");

module.exports = defineRequirementUploads(BusinessProcessDemo, [
	require('../documents/business-plan'),
	{
		class: require('../documents/company-registration'),
		legend: _("Must be up to date with the national registry.")
	},
	require('../documents/inventory'),
	require('../documents/passport')
]);
