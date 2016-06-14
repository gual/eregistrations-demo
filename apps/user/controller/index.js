'use strict';

var assign           = require('es5-ext/object/assign')
  , createBp         = require('eregistrations/controller/utils/create-business-process')
  , validateCreateBp = require('eregistrations/controller/utils/validate-create-business-process')
  , db               = require('../../../db');

// Common controller.
assign(exports, require('eregistrations/controller/my-account'));

exports['register-as-demo'] = {
	submit: createBp(db.BusinessProcessDemo),
	redirectUrl: '/',
	validate: validateCreateBp(db.BusinessProcessDemo)
};
