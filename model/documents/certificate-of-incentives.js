'use strict';

var _  = require('../../i18n')
  , db = require('../../db');

module.exports = require('eregistrations/model/document')(db).extend('CertificateOfIncentives', {},
	{ label: { value: _("Certificate of incentives") }, abbr: { value: "COI" } });
