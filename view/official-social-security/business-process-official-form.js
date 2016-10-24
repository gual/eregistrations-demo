'use strict';

var processingDisabler = require('eregistrations/view/components/disable-processing-step')
  , _                  = require('../../i18n');

module.exports = exports = require('eregistrations/view/business-process-official-form');

var getRejection = function () {
	return [dialog(
		{ id: 'reject-reason', class: 'dialog-reject dialog-modal' },
		header(
			label({ for: 'revision-reject-reason' }, h3(_("Reason for rejection of the file")))
		),
		section({ class: 'dialog-body' },
			form({ method: 'post', action: '/' + this.businessProcess.__id__ + '/reject/' },
				p({ class: 'input' }, input({ id: 'revision-reject-reason',
					dbjs: this.processingStep._rejectionReason })),
				p(input({ type: 'submit', value: _("Reject") })))),
		footer(p(a({ href: '' }, _("Cancel"))))
	), a({
		href: '#reject-reason',
		class: 'button-main button-main-error'
	}, _("Reject application"))];
};

exports._officialForm = function () {

	return section({ class: 'section-primary' }, processingDisabler(
		this.processingStep,
		[
			getRejection.call(this),
			this.processingStep.dataForm.toDOMForm(document),
			_if(eq(this.processingStep._approvalProgress, 1),
				p(postButton({ buttonClass: 'button-main button-main-success',
					action: url(this.businessProcess.__id__, 'validate'),
					value: span(_("Approve")) })))
		]
	));
};
