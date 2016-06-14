'use strict';

var BusinessProcessDemo = require('./base');
var defineRequirementUploads =
	require('eregistrations/model/business-process-new/utils/define-requirement-uploads');

module.exports = defineRequirementUploads(BusinessProcessDemo, [
	/* TODO: Provide document classes */
]);
