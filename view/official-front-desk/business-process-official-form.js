'use strict';

var processingDisabler = require('eregistrations/view/components/disable-processing-step')
  , _                  = require('../../i18n')

  , _d = _;

module.exports = exports = require('eregistrations/view/business-process-official-form');

exports._officialForm = function () {
	var businessProcess = this.businessProcess
	  , processingStep  = this.processingStep
	  , user            = this.user;

	return section({ class: 'section-primary official-form' },
		processingDisabler(processingStep,
			[h2(_("Delivery of registrations")),
				p({ class: 'withdrawal-text' },
					_("I, ${ userFullName } certify having seen the original of the following documents:",
						{ userFullName: b(user._fullName) })),

				// Confirm documents
				form({ id: 'docs-validation', autoSubmit: true,
					action: url(businessProcess.__id__, 'validate-docs'), method: 'post' },
					ul(list(processingStep.requirementUploads.frontDeskApplicable,
						function (requirementUpload) {
							var doc = requirementUpload.document;

							return li(
								label({ class: 'input-aside' },
									input({ dbjs: requirementUpload._isFrontDeskApproved, type: 'checkbox' }), " ",
									span(_d(doc.label, doc.getTranslations())))
							);
						})),
					p({ class: 'withdrawal-text' },
						_("I, ${ userFullName } certify to have handed over the records to the applicant",
							{ userFullName: b(user._fullName) })),
					ul(list(businessProcess.certificates._toBeHanded,
						function (certificate) {
							var isProcessed = eq(certificate.processingStep._status, 'approved');

							return _if(isProcessed, li(
								label({ class: 'input-aside' },
									input({ dbjs: certificate._wasHanded, type: 'checkbox' }), " ",
									span(_d(certificate.label, { user: certificate.master })))
							));
						})),
					p(
						{ class: 'submit' },
						input({ class: 'button-main', type: 'submit', value: _("Registration delivered") })
					)),
				_if(eq(processingStep._approvalProgress, 1),
					div(
						{ class: 'official-submission-toolbar' },
						// Final submit button
						postButton({ action: url(businessProcess.__id__, 'approve'),
							buttonClass: 'button-main button-main-success',
							value: _("Registration delivered") })
					))]));
};
