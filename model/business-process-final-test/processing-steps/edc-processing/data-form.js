'use strict';

var BusinessProcessFinalTest = require('./base')
  , db                       = require('../../../../db')
  , _                        = require('../../../../i18n').bind("Model: Edc Processing")
  , FormSection              = require('eregistrations/model/form-section')(db);

var step = BusinessProcessFinalTest.prototype.processingSteps.map.edcProcessing;
step.getOwnDescriptor('dataForm').type = FormSection;

step.dataForm.setProperties({
	label: _("EDC approval"),
	actionUrl: function () {
		return this.master.__id__ + '/edc-processing-form';
	},
	propertyMasterType: step.constructor,
	propertyNames: ['score']
});
