// Configuration of branches tab group section for BusinessProcessDemo.

'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n').bind('Model: Sections')
  , FormEntitiesTable   = require('eregistrations/model/form-entities-table')(db)
  , TabularEntity       = require('eregistrations/model/form-tabular-entity')(db)
  , BusinessProcessDemo = require('../fields')
  , dataFormsMap        = BusinessProcessDemo.prototype.dataForms.map;

require('eregistrations/model/business-process-new/data-forms')(db);

dataFormsMap.defineProperties({
	branches: {
		type: FormEntitiesTable,
		nested: true
	}
});

dataFormsMap.branches.setProperties({
	label: _("Branches"),
	baseUrl: 'branch',
	propertyName: 'branches',
	sectionProperty: 'dataForms',
	entityTitleProperty: 'businessName'
});

['businessName'].forEach(function (prop) {
	dataFormsMap.branches.entities.add(new TabularEntity({
		propertyName: prop
	}));
});

module.exports = BusinessProcessDemo;
