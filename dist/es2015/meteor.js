import { Meteor as MeteorMeteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { DDP } from 'meteor/ddp';

export let StatusEnum = class StatusEnum {
  constructor(name) {
    this.name = name;
  }
  toString() {
    return this.name;
  }
};
StatusEnum.connected = new StatusEnum('connected');
StatusEnum.connecting = new StatusEnum('connecting');
StatusEnum.failed = new StatusEnum('failed');
StatusEnum.waiting = new StatusEnum('waiting');
StatusEnum.offline = new StatusEnum('offline');

export let Meteor = class Meteor {

  constructor() {
    Tracker.autorun(() => {
      this.isClient = MeteorMeteor.isClient;
      this.isCordova = MeteorMeteor.isCordova;
      this.isServer = MeteorMeteor.isServer;
      this.release = MeteorMeteor.release;
    });

    Tracker.autorun(() => {
      const meteorStatus = MeteorMeteor.status();
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

      const meteorUser = MeteorMeteor.user();
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
};