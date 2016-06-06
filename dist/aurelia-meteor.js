import {Blaze} from 'meteor/blaze';
import {Template} from 'meteor/templating';
import {inject,inlineView,bindable} from 'aurelia-framework';

/**
 * If want to inject into the extended class, you have to inject the current Element
 * and pass it to super() :
 *   constructor(elementRef: Element, xxx: Ttt) {
 *     super(elementRef);
 *     this.xxx = xxx;
 *   }
 */
@inlineView('<template></template>')
@inject(Element)
export class BlazeAdapter {
  _view: Blaze.View;
  _element: Element;

  constructor(elementRef: Element) {
    this._element = elementRef;
  }

  templateName(): string {
    throw new Error('BlazeAdapter.templateName() has to be implemented');
  }

  properties(): Map | Function {
    throw new Error('BlazeAdapter.properties() has to be implemented');
  }

  bind(bindingContext: Object, overrideContext: Object) {
    this._view = Blaze.renderWithData(
      Template[this.templateName()],
      this.properties(),
      this._element
    );
  }

  unbind() {
    Blaze.remove(this._view);
  }
}

export class LoginButtons extends BlazeAdapter {
  @bindable align: string;

  templateName(): string {
    return 'loginButtons';
  }

  properties(): Map {
    return {align: this.align};
  }
}
