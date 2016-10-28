// Base configuration for data form sections for "Branch" nested entity.

'use strict';

var db                    = require('../../../../../db')
  , PropertyGroupsProcess = require('eregistrations/model/lib/property-groups-process')(db)
  , Branch                = require('../fields');

Branch.prototype.defineProperties({
	dataForms: {
		type: PropertyGroupsProcess,
		nested: true
	}
});

module.exports = Branch;
