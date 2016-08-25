'use strict';

var _  = require('../../i18n')
  , db = require('../../db');

module.exports =
	require('eregistrations/model/document')(db).extend('EregistrationsDeveloperCertificate',
		{}, {
			label: { value: _("Eregistrations Developer Certificate") },
			abbr: { value: "EDC" }
		});
