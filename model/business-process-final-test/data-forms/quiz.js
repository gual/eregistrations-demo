'use strict';

var db                       = require('../../../db')
  , _                        = require('../../../i18n')
  , FormSection              = require('eregistrations/model/form-section')(db)
  , BusinessProcessFinalTest = require('../fields');

BusinessProcessFinalTest.prototype.dataForms.map.define('quiz', {
	nested: true,
	type: FormSection
});

BusinessProcessFinalTest.prototype.dataForms.map.quiz.setProperties({
	label: _("JavaScript Quiz"),
	actionUrl: 'quiz',
	propertyNames: ['quiz/howManyNonValues',
		'quiz/nullToUndefinedComparison', 'quiz/concatOperator']
});

module.exports = BusinessProcessFinalTest;
