'use strict';

var _                   = require('../../i18n')
  , BusinessProcessDemo = require('./costs');

var definePaymentReceiptUploads =
	require('eregistrations/model/business-process-new/utils/define-payment-receipt-uploads');

module.exports = definePaymentReceiptUploads(BusinessProcessDemo, {
	companyRegistration: { label: _("Proof of payment for company registration") }
});
