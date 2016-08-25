'use strict';

var BusinessProcessFinalTest = require('./base');

var defineCertificates =
	require('eregistrations/model/business-process-new/utils/define-certificates');

module.exports = defineCertificates(BusinessProcessFinalTest, [
	/* TODO: Provide requires to certificate definitions */
]);
