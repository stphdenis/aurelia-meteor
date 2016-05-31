import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';

import { autoinject, inlineView } from 'aurelia-framework';

/**
 * If want to inject into the extended class, you have to inject the current Element
 * and pass it to super() :
 *   constructor(elementRef: Element, xxx: Ttt) {
 *     super(elementRef);
 *     this.xxx = xxx;
 *   }
 */
@inlineView('<template></template>')
@autoinject
export abstract class BlazeAdapter {
  private _view: Blaze.View;
  private _element: Element;

  public abstract templateName(): string;
  public abstract properties(): {} | Function;

  constructor(elementRef: Element) {
    this._element = elementRef;
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
