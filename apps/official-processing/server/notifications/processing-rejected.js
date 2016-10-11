'use strict';

var _                        = require('../../../../i18n').bind('Email notifications')
  , businessProcessInstances = require('../../../../apps-common/business-processes/submitted/demo');

exports.preTrigger = businessProcessInstances
	.filterByKeyPath('processingSteps/map/processing/isReady', true);
exports.trigger = businessProcessInstances
	.filterByKeyPath('processingSteps/map/processing/isApproved', true);

exports.subject = _("Processing completed");
exports.text = _("The processing of your application is completed.");
