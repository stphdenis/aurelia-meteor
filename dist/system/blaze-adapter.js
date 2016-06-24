'use strict';

System.register(['meteor/blaze', 'meteor/templating', 'aurelia-framework'], function (_export, _context) {
  "use strict";

  var Blaze, Template, inject, inlineView, _dec, _dec2, _class, BlazeAdapter;

  

  return {
    setters: [function (_meteorBlaze) {
      Blaze = _meteorBlaze.Blaze;
    }, function (_meteorTemplating) {
      Template = _meteorTemplating.Template;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      inlineView = _aureliaFramework.inlineView;
    }],
    execute: function () {
      _export('BlazeAdapter', BlazeAdapter = (_dec = inlineView('<template></template>'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
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
      }()) || _class) || _class));

      _export('BlazeAdapter', BlazeAdapter);
    }
  };
});