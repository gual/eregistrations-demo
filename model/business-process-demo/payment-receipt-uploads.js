'use strict';

var _                   = require('../../i18n')
  , BusinessProcessDemo = require('./costs');

var definePaymentReceiptUploads =
	require('eregistrations/model/business-process-new/utils/define-payment-receipt-uploads');

module.exports = definePaymentReceiptUploads(BusinessProcessDemo, {
	companyRegistration: {
		costs: [
			BusinessProcessDemo.prototype.costs.map.companyRegistration,
			BusinessProcessDemo.prototype.costs.map.certificateOfIncentives
		],
		label: _("Proof of payment for company registration")
	}
});
