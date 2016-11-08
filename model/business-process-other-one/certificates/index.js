'use strict';

var BusinessProcessOtherOne = require('./base');

var defineCertificates =
	require('eregistrations/model/business-process-new/utils/define-certificates');

module.exports = defineCertificates(BusinessProcessOtherOne, [
	/* TODO: Provide requires to certificate definitions */
]);
