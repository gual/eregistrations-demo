'use strict';

var BusinessProcessOtherOne = require('./base');
var defineRequirementUploads =
	require('eregistrations/model/business-process-new/utils/define-requirement-uploads');

module.exports = defineRequirementUploads(BusinessProcessOtherOne, [
	/* TODO: Provide document classes */
]);
