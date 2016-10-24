'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n').bind('Company: Model: Sections')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , FormSectionGroup    = require('eregistrations/model/form-section-group')(db)
  , BusinessProcessDemo = require('../base')

  , company;

BusinessProcessDemo.prototype.dataForms.map.define('company', {
  nested: true,
  type: FormSectionGroup
});

company = BusinessProcessDemo.prototype.dataForms.map.company;

company.setProperties({
  label: _("Data of the company"),
  hasSplitForms: true
});

company.sections.defineProperties({
  companyInformation: { type: FormSection, nested: true },
  attorney: { type: FormSection, nested: true }
});

company.sections.companyInformation.setProperties({
  label: _("Company Information"),
  actionUrl: 'company-information',
  propertyNames: ['businessName', 'address/country', 'address/city', 'address/street']
});

company.sections.attorney.setProperties({
  label: _("Attorney"),
  actionUrl: 'attorney',
  isApplicable: function (_observe) {
    return _observe(this.master.registrations.requested)
      .has(this.master.registrations.map.certificateOfIncentives);
  },
  propertyNames: ['attorney/firstName', 'attorney/lastName', 'attorney/email']
});
