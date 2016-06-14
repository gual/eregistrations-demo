'use strict';

var _  = require('../../i18n')
  , db = require('../../db');

module.exports = require('eregistrations/model/document')(db).extend('BusinessPlan', {}, {
	label: { value: _("Business plan") }
});
