'use strict';

var db                = require('../../../db')
  , officialStatusLog = require('eregistrations/status-logs/official-revision');

module.exports = officialStatusLog(db.BusinessProcessDemo)
	.concat(officialStatusLog(db.BusinessProcessFinalTest));
