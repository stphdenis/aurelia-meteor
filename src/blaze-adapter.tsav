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
  private _view: Blaze.View;
  private _element: Element;

  constructor(elementRef: Element) {
    this._element = elementRef;
  }

  public templateName(): string {
    throw new Error('BlazeAdapter.templateName() has to be implemented');
  }

  public properties(): {} | Function {
    throw new Error('BlazeAdapter.properties() has to be implemented');
  }

  public bind(bindingContext: Object, overrideContext: Object): void {
    this._view = Blaze.renderWithData(
      Template[this.templateName()],
      this.properties(),
      this._element
    );
  }

  public unbind(): void {
    Blaze.remove(this._view);
  }
}
