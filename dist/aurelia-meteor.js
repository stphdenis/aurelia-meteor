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
export class BlazeAdapter {//abstract
  _view: Blaze.View;//private
  _element: Element;//private

  templateName(): string {//public abstract
    throw new Error('BlazeAdapter.templateName() has to be implemented');
  }

  properties(): Map | Function {//public abstract
    throw new Error('BlazeAdapter.properties() has to be implemented');
  }

  constructor(elementRef: Element) {
    this._element = elementRef;
  }

  bind(bindingContext: Object, overrideContext: Object) {//public
    this._view = Blaze.renderWithData(
      Template[this.templateName()],
      this.properties(),
      this._element
    );
  }

  unbind() {//public
    Blaze.remove(this._view);
  }
}

export class LoginButtons extends BlazeAdapter {
  @bindable align: string;//public

  templateName(): string {//public
    return 'loginButtons';
  }

  properties(): Map {//public
    return {align: this.align};
  }
}
