'use strict';

var _                        = require('../../i18n')
  , BusinessProcessFinalTest = require('./costs');

var definePaymentReceiptUploads =
	require('eregistrations/model/business-process-new/utils/define-payment-receipt-uploads');

module.exports = definePaymentReceiptUploads(BusinessProcessFinalTest, {
	eregistrationsDeveloperCertificate: {
		label: _("Proof of payment for Eregistrations Development Certificate")
	}
});
