'use strict';

var db             = require('../../../db')
  , BusinessProcessFinalTest = require('../base');

require('eregistrations/model/business-process-new/processing-steps')(db);

module.exports = BusinessProcessFinalTest;
