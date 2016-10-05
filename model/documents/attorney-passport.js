'use strict';

var _  = require('../../i18n')
  , db = require('../../db');

module.exports = require('eregistrations/model/document')(db).extend('AttorneyPassport', {}, {
	label: { value: _("Attorney passport") }
});
