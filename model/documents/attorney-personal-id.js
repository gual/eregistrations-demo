'use strict';

var _  = require('../../i18n')
  , db = require('../../db');

module.exports = require('eregistrations/model/document')(db).extend('AttorneyPersonalId', {}, {
	label: { value: _("Personal id document of attorney") }
});
