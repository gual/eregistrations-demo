// Routes for the views.

'use strict';

var assign           = require('es5-ext/object/assign')
  , defineTabbedForm = require('eregistrations/routes/utils/define-tabbed-form');

require('../../view/print-base');
require('../../view/user-base');

assign(exports, require('eregistrations/routes/business-process'));

defineTabbedForm('company', { isDefault: true, context: exports });
defineTabbedForm('representative', { context: exports });
