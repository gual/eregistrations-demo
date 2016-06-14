'use strict';

var db             = require('../../../db')
  , BusinessProcessDemo = require('../base');

require('eregistrations/model/business-process-new/processing-steps')(db);

module.exports = BusinessProcessDemo;
