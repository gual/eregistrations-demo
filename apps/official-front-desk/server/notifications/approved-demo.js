'use strict';

var businessProcesses       = require('../../../../apps-common/business-processes/submitted/demo')
  , getApprovedNotification = require('../get-approved-notification');

module.exports = getApprovedNotification(businessProcesses);
