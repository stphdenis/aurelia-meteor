var _dec, _dec2, _class;

import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';

import { inject, inlineView } from 'aurelia-framework';

export let BlazeAdapter = (_dec = inlineView('<template></template>'), _dec2 = inject(Element), _dec(_class = _dec2(_class = class BlazeAdapter {

  constructor(elementRef) {
    this._element = elementRef;
  }

  templateName() {
    throw new Error('BlazeAdapter.templateName() has to be implemented');
  }

  properties() {
    throw new Error('BlazeAdapter.properties() has to be implemented');
  }

  bind(bindingContext, overrideContext) {
    this._view = Blaze.renderWithData(Template[this.templateName()], this.properties(), this._element);
  }

  unbind() {
    Blaze.remove(this._view);
  }
}) || _class) || _class);