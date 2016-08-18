'use strict';

var db          = require('../../../db')
  , Requirement = require('eregistrations/model/requirement')(db)
  , _ = require('../../../i18n').bind('Model: Business Process: Id Document');

module.exports = Requirement.extend('IdDocumentRequirement', {
	label: {
		value: _("National Id for citizens or passport for foreigners")
	},
	uploads: {
		value: function (_observe) {
			var result = [], requirementUploadsMap = this.master.requirementUploads.map;
			if (_observe(this.master.representative._isCitizen)) {
				result.push(requirementUploadsMap.nationalId);
			} else {
				result.push(requirementUploadsMap.passport);
			}

			return result;
		}
	}
});
