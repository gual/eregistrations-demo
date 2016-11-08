// Generates mock for legacy

'use strict';

// Ensure mano.env
require('../server/env');

var resolve          = require('path').resolve
  , debug            = require('debug-ext')('setup')
  , generateDbjsMock = require('eregistrations/scripts/generate-legacy-dbjs-mock')
  , BusinessProcess  = require('../model/business-process-other-one');

var protoPath =
'../apps/business-process-other-one/client/legacy/business-process-other-one-legacy-proto.js';
module.exports = function () {
	debug('generate-business-process-other-one-legacy-dbjs-mock');

	return generateDbjsMock(BusinessProcess,
		resolve(__dirname, protoPath));
};
