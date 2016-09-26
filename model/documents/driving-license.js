'use strict';

var _  = require('../../i18n')
  , db = require('../../db');

module.exports = require('eregistrations/model/document')(db).extend('DrivingLicense', {}, {
	label: { value: _("Driving license") },
	abbr: { value: _("DL") }
});
