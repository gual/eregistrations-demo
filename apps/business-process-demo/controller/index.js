// Controller for both server and client.

'use strict';

var db                 = require('../../../db')
  , assign             = require('es5-ext/object/assign')
  , entitiesController = require('eregistrations/controller/generate-entities-controllers');

assign(exports, require('eregistrations/controller/registration'));

exports['company-information'] = true;
exports.attorney = true;

entitiesController(exports, {
	name: 'branch',
	targetMap: function () { return this.businessProcess.branches; },
	pageUrl: '/forms/',
	tableHtmlId: db.BusinessProcessDemo.prototype.dataForms.map.branches.domId,
	targetEntityPrototype: db.Branch.prototype
});
