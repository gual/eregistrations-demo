// Business process table columns global customization.
'use strict';

var db      = require('../../db')
  , columns = require('eregistrations/view/components/business-process-table-columns');

module.exports = columns;

columns.getServiceIcon = function (businessProcess) {
	if (businessProcess.constructor === db.BusinessProcessDemo) {
		return i({ class: "fa fa-file" });
	}
};
