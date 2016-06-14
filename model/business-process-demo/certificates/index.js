'use strict';

var BusinessProcessDemo = require('./base');

var defineCertificates =
	require('eregistrations/model/business-process-new/utils/define-certificates');

module.exports = defineCertificates(BusinessProcessDemo, [
	/* TODO: Provide requires to certificate definitions */
]);
