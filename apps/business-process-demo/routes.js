// Routes for the views.

'use strict';

var assign = require('es5-ext/object/assign');

require('../../view/print-base');
require('../../view/user-base');

assign(exports, require('eregistrations/routes/business-process'), {
	'branch/[a-z0-9]+': {
		match: function (entity) {
			this.entity = this.businessProcess.branches.map.get(entity);
			return true;
		},
		view: require('eregistrations/view/business-process-add-edit-entity')
	}
});
