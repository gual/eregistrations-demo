'use strict';

var BusinessProcessFinalTest = require('./costs');

var definePaymentReceiptUploads =
	require('eregistrations/model/business-process-new/utils/define-payment-receipt-uploads');

module.exports = definePaymentReceiptUploads(BusinessProcessFinalTest, {

});
