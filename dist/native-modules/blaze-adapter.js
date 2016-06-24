var _dec, _dec2, _class;



import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';

import { inject, inlineView } from 'aurelia-framework';

export var BlazeAdapter = (_dec = inlineView('<template></template>'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
  function BlazeAdapter(elementRef) {
    

    this._element = elementRef;
  }

  BlazeAdapter.prototype.templateName = function templateName() {
    throw new Error('BlazeAdapter.templateName() has to be implemented');
  };

  BlazeAdapter.prototype.properties = function properties() {
    throw new Error('BlazeAdapter.properties() has to be implemented');
  };

  BlazeAdapter.prototype.bind = function bind(bindingContext, overrideContext) {
    this._view = Blaze.renderWithData(Template[this.templateName()], this.properties(), this._element);
  };

  BlazeAdapter.prototype.unbind = function unbind() {
    Blaze.remove(this._view);
  };

  return BlazeAdapter;
}()) || _class) || _class);