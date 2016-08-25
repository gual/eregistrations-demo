'use strict';

var BusinessProcessFinalTest = require('./base');

var defineRequirements =
	require('eregistrations/model/business-process-new/utils/define-requirements');

module.exports = defineRequirements(BusinessProcessFinalTest, [
	require('../documents/passport'),
	require('../documents/graduation-diploma'),
	require('../documents/transportation-ticket')
]);
