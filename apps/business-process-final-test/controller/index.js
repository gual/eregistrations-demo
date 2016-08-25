// Controller for both server and client.

'use strict';

var assign = require('es5-ext/object/assign');

assign(exports, require('eregistrations/controller/registration'));

exports['personal-information'] = true;
exports.quiz                    = true;
