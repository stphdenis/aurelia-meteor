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
    constructor(elementRef: Element);
    templateName(): string;
    properties(): Map<string, string> | Function;
    bind(bindingContext: Object, overrideContext: Object): any;
    unbind(): any;
  }
  export class LoginButtons extends BlazeAdapter {
    align: string;
    templateName(): string;
    properties(): Map<string, string>;
  }
}
