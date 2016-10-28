'use strict';

var db          = require('../../../../../db')
  , _           = require('../../../../../i18n').bind('Model: Branch')
  , FormSection = require('eregistrations/model/form-section')(db)
  , Branch      = require('./base');

Branch.prototype.dataForms.map.defineProperties({
	branchInformation: {
		type: FormSection,
		nested: true
	}
});

Branch.prototype.dataForms.map.branchInformation.setProperties({
	label: _("Branch information"),
	propertyNames: [ 'businessName', 'address/country', 'address/city', 'address/street'],
	actionUrl: function () {
		return 'branch/' + this.propertyMaster.key;
	},
	propertyMasterType: Branch
});
