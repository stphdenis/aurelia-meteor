import {Meteor as MeteorMeteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {DDP} from 'meteor/ddp';
import {Blaze} from 'meteor/blaze';
import {Template} from 'meteor/templating';
import {inject, inlineView, bindable} from 'aurelia-framework';

export class StatusEnum {
  constructor(name: string) {
    this.name = name;
  }
  toString(): string {
    return this.name;
  }
}
StatusEnum.connected = new StatusEnum('connected');
StatusEnum.connecting = new StatusEnum('connecting');
StatusEnum.failed = new StatusEnum('failed');
StatusEnum.waiting = new StatusEnum('waiting');
StatusEnum.offline = new StatusEnum('offline');

export class Meteor {
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

  constructor() {
    Tracker.autorun(() => {
      this.isClient = MeteorMeteor.isClient;
      this.isCordova = MeteorMeteor.isCordova;
      this.isServer = MeteorMeteor.isServer;
      this.release = MeteorMeteor.release;
    });

    Tracker.autorun(() => {
      const meteorStatus: DDP.DDPStatus = MeteorMeteor.status();
      this.statusString = meteorStatus.status;
      switch (this.statusString) {
      case 'connected':
        this.status = StatusEnum.connected;
        break;
      case 'connecting':
        this.status = StatusEnum.connecting;
        break;
      case 'failed':
        this.status = StatusEnum.failed;
        break;
      case 'waiting':
        this.status = StatusEnum.waiting;
        break;
      case 'offline':
        this.status = StatusEnum.offline;
        break;
      default:
        this.status = undefined;
      }
      this.connected = meteorStatus.connected;
      this.retryCount = meteorStatus.retryCount;
    });

    Tracker.autorun(() => {
      this.userId = MeteorMeteor.userId();

      const meteorUser: Meteor.User = MeteorMeteor.user();
      if (meteorUser) {
        if (meteorUser.emails) {
          this.address = meteorUser.emails[0].address;
          this.verified = meteorUser.emails[0].verified;
        } else {
          this.address = undefined;
          this.verified = undefined;
        }
        this.username = meteorUser.username;
        this.createdAt = meteorUser.createdAt;
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
