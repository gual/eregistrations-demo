'use strict';

var db             = require('../../../db')
  , BusinessProcessOtherOne = require('../base');

require('eregistrations/model/business-process-new/processing-steps')(db);

module.exports = BusinessProcessOtherOne;
