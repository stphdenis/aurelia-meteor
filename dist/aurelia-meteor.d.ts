import {
  Meteor as MeteorMeteor
} from 'meteor/meteor';
import {
  Tracker
} from 'meteor/tracker';
import {
  DDP
} from 'meteor/ddp';
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
export declare class StatusEnum {
  constructor(name: string);
  toString(): string;
}
export declare class Meteor {
  isClient: boolean;
  isCordova: boolean;
  isServer: boolean;
  release: string;
  status: StatusEnum;
  statusString: string;
  connected: boolean;
  retryCount: number;
  userId: string;
  address: string;
  verified: boolean;
  username: string;
  createdAt: number;
  constructor();
}

/**
 * If want to inject into the extended class, you have to inject the current Element
 * and pass it to super() :
 *   constructor(elementRef: Element, xxx: Ttt) {
 *     super(elementRef);
 *     this.xxx = xxx;
 *   }
 */
export declare class BlazeAdapter {

  //  _view: Blaze.View; // private
  //  _element: Element; // private
  constructor(elementRef: Element);
  templateName(): string;
  properties(): {[key: string]: string} | Function;
  bind(bindingContext: Object, overrideContext: Object): any;
  unbind(): any;
}
export declare class LoginButtons extends BlazeAdapter {
  align: string;
  templateName(): string;
  properties(): {align: string};
}
