'use strict';

var _ = require('../../i18n');

module.exports = exports = require('eregistrations/view/business-process-documents');

exports._optionalInfo = function () {
	return div({ class: 'info-main' }, _("Please make sure that all the scanned documents are readable."));
};
