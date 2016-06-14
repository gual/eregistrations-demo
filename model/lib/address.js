"use strict";

var _          = require('../../i18n')
  , db         = require('../../db')
  , StringLine = require('dbjs-ext/string/string-line')(db)
  , Country    = require('dbjs-ext/string/string-line/country')(db);

module.exports = db.Object.extend('Address', {
	country: { type: Country, label: _("Country"), required: true },
	city: { type: StringLine, label: _("City"), required: true },
	street: { type: StringLine, label: _("Street or location"), required: true }
});
