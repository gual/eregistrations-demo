// Routes for the views.

'use strict';

var assign = require('es5-ext/object/assign');

require('../../view/print-base');
require('../../view/user-base');
require('../../view/business-process-demo/business-process-documents');

assign(exports, require('eregistrations/routes/business-process'));
