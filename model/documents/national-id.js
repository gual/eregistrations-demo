'use strict';

var _  = require('../../i18n')
  , db = require('../../db');

module.exports = require('eregistrations/model/document')(db).extend('NationalId', {}, {
	label: { value: _("National id") }
});
