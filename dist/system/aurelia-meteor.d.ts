declare module 'aurelia-meteor' {
  import {
    Blaze
  } from 'meteor/blaze';
  import {
    Template
  } from 'meteor/templating';
  import {
    inject,
    inlineView,
    bindable
  } from 'aurelia-framework';
  
  /**
   * If want to inject into the extended class, you have to inject the current Element
   * and pass it to super() :
   *   constructor(elementRef: Element, xxx: Ttt) {
   *     super(elementRef);
   *     this.xxx = xxx;
   *   }
   */
  export class BlazeAdapter {
    
    //abstract
    _view: undefined;
    
    //private
    _element: Element;
    
    //private
    templateName(): string;
    properties(): Map | Function;
    constructor(elementRef: Element);
    bind(bindingContext: Object, overrideContext: Object): any;
    unbind(): any;
  }
  export class LoginButtons extends BlazeAdapter {
    align: string;
    
    //public
    templateName(): string;
    properties(): Map;
  }
  export {
    BlazeAdapter,
    LoginButtons
  };
}