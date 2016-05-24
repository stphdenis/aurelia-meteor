import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';

import { bindable } from 'aurelia-framework';
import { autoinject } from 'aurelia-dependency-injection';
import { noView } from 'aurelia-templating';

@noView
@autoinject
export class AccountsUI {
  @bindable public align: string;
  private _view: Blaze.View;
  private _element: Element;

  constructor(elementRef: Element) {
    this._element = elementRef;
  //  this._view = Blaze.renderWithData(Template['loginButtons'], data, elementRef);
  }

  public bind(bindingContext: Object, overrideContext: Object): void {
    const data: {} = this.align ? { align: this.align } : {};
    this._view = Blaze.renderWithData(Template['loginButtons'], data, this._element);
  }

  public attached(): void {
  //  const data: {} = align ? { align } : {};
  //  this._view = Blaze.renderWithData(Template['loginButtons'], data, elementRef);
  }

  public detached(): void {
  //  Blaze.remove(this._view);
  }

  public unbind(): void {
    Blaze.remove(this._view);
  }
}
