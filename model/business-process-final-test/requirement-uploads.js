'use strict';

var BusinessProcessFinalTest = require('./base');
var defineRequirementUploads =
	require('eregistrations/model/business-process-new/utils/define-requirement-uploads');

module.exports = defineRequirementUploads(BusinessProcessFinalTest, [
	require('../documents/passport'),
	require('../documents/graduation-diploma'),
	require('../documents/transportation-ticket')
]);
