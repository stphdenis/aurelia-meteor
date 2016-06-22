import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';

import { inject, inlineView } from 'aurelia-framework';

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
//  _view: Blaze.View; // private
//  _element: Element; // private

  constructor(elementRef: Element) {
    this._element = elementRef;
  }

  templateName(): string {
    throw new Error('BlazeAdapter.templateName() has to be implemented');
  }

  properties(): any { // {[key: string]: string} | Function

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
