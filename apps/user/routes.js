// Routes for the views.

'use strict';

var assign = require('es5-ext/object/assign');

require('../../view/print-base');
require('../../view/user');
require('../../view/components/business-process-table-columns');

assign(exports, require('eregistrations/routes/user'));
