'use strict';

var _                   = require('../../../i18n')
  , BusinessProcessDemo = require('../base');

module.exports = BusinessProcessDemo;

BusinessProcessDemo.prototype.costs.map.define('booksVerificationFee', {
	nested: true
});

BusinessProcessDemo.prototype.costs.map.booksVerificationFee.setProperties({
	label: _("Books verification fee"),
	amount: 1000
});
