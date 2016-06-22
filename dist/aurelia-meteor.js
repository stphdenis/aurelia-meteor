import {Meteor as MeteorMeteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Blaze} from 'meteor/blaze';
import {Template} from 'meteor/templating';
import {inject,inlineView,bindable} from 'aurelia-framework';

export class Meteor {
  isClient: boolean;
  isCordova: boolean;
  isServer: boolean;
  release: string;
  status: MeteorMeteor.StatusEnum;
  connected: boolean;
  retryCount: number;
  userId: string;
  address: string;
  verified: boolean;
  username: string;
  createdAt: number;

  constructor() {
    Tracker.autorun(() => {
      this.isClient = MeteorMeteor.isClient;
      this.isCordova = MeteorMeteor.isCordova;
      this.isServer = MeteorMeteor.isServer;
      this.release = MeteorMeteor.release;
    });
    Tracker.autorun(() => {
      this.status = MeteorMeteor.status().status;
      this.connected = MeteorMeteor.status().connected;
      this.retryCount = MeteorMeteor.status().retryCount;
    });
    Tracker.autorun(() => {
      this.userId = MeteorMeteor.userId();
      if (MeteorMeteor.user()) {
        this.address = MeteorMeteor.user().emails[0].address;
        this.verified = MeteorMeteor.user().emails[0].verified;
        this.username = MeteorMeteor.user().username;
        this.createdAt = MeteorMeteor.user().createdAt;
      } else {
        this.address = undefined;
        this.verified = undefined;
        this.username = undefined;
        this.createdAt = undefined;
      }
    });
  }
}

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

  properties(): {[key: string]: string} | Function {

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

  properties(): {align: string} {
    return {align: this.align};
  }
}
