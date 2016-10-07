'use strict';

var _  = require('../../i18n')
  , db = require('../../db');

module.exports = require('eregistrations/model/document')(db).extend('CompanyIncorporation', {}, {
	label: { value: _("Company incorporation") },
	abbr: { value: "CINC" }
});
