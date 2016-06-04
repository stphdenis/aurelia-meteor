var _dec, _dec2, _class, _desc, _value, _class3, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';
import { inject, inlineView, bindable } from 'aurelia-framework';

export let BlazeAdapter = (_dec = inlineView('<template></template>'), _dec2 = inject(Element), _dec(_class = _dec2(_class = class BlazeAdapter {

  templateName() {
    throw new Error('BlazeAdapter.templateName() has to be implemented');
  }

  properties() {
    throw new Error('BlazeAdapter.properties() has to be implemented');
  }

  constructor(elementRef) {
    this._element = elementRef;
  }

  bind(bindingContext, overrideContext) {
    this._view = Blaze.renderWithData(Template[this.templateName()], this.properties(), this._element);
  }

  unbind() {
    Blaze.remove(this._view);
  }
}) || _class) || _class);

export let LoginButtons = (_class3 = class LoginButtons extends BlazeAdapter {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), _initDefineProp(this, 'align', _descriptor, this), _temp;
  }

  templateName() {
    return 'loginButtons';
  }

  properties() {
    return { align: this.align };
  }
}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'align', [bindable], {
  enumerable: true,
  initializer: null
})), _class3);