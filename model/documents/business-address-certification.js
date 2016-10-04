'use strict';

var _  = require('../../i18n')
  , db = require('../../db');

module.exports = require('eregistrations/model/document')(db)
	.extend('BusinessAddressCertification', {}, {
		label: { value: _("Business address certification") },
		abbr: { value: "CADDR" }
	});
