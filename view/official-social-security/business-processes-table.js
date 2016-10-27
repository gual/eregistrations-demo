'use strict';

var _           = require('../../i18n').bind("Social Security table")
  , from        = require('es5-ext/array/from')
  , getTable    = require('eregistrations/view/components/business-processes-table')
  , tableCols   = require('eregistrations/view/components/business-process-table-columns')
  , statusMap   = require('../../apps/official-social-security/business-processes/map')
  , getOrderIdx =
		require('../../apps/official-social-security/business-processes/get-default-order-index')
  , env         = require('../../apps-common/client/env')

  , columns       = from(tableCols.columns);

module.exports = exports = require('eregistrations/view/business-processes-table');

columns.splice(-1, 0, {
	head: _("Sealed at"),
	class: 'submitted-user-data-table-service',
	data: function (businessProcess) {
		return span(businessProcess.processingSteps.map.socialSecurity._sealDate);
	}
});
columns.push(tableCols.archiverColumn);
columns.push(tableCols.goToColumn);

exports._statusMap = function () {
	return statusMap;
};

exports._businessProcessTable = function () {
	return getTable({
		user: this.user,
		roleName: 'socialSecurity',
		statusMap: statusMap,
		getOrderIndex: getOrderIdx,
		itemsPerPage: env.objectsListItemsPerPage,
		columns: columns,
		class: 'submitted-user-data-table'
	});
};
