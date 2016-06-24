define(['exports', 'meteor/blaze', 'meteor/templating', 'aurelia-framework'], function (exports, _blaze, _templating, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BlazeAdapter = undefined;

  

  var _dec, _dec2, _class;

  var BlazeAdapter = exports.BlazeAdapter = (_dec = (0, _aureliaFramework.inlineView)('<template></template>'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = function () {
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
      this._view = _blaze.Blaze.renderWithData(_templating.Template[this.templateName()], this.properties(), this._element);
    };

    BlazeAdapter.prototype.unbind = function unbind() {
      _blaze.Blaze.remove(this._view);
    };

    return BlazeAdapter;
  }()) || _class) || _class);
});