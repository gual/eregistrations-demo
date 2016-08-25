'use strict';

var businessProcesses       =
		require('../../../../apps-common/business-processes/submitted/final-test')
  , getApprovedNotification = require('../get-approved-notification');

module.exports = getApprovedNotification(businessProcesses);
