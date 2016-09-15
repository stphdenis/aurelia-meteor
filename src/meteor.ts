import { Meteor as MeteorMeteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export enum StatusEnum {
  connected,
  connecting,
  failed,
  waiting,
  offline
}

export class Meteor {
  public isClient: boolean;
  public isCordova: boolean;
  public isServer: boolean;
  public release: string;
  public status: StatusEnum;
  public statusString: string;
  public connected: boolean;
  public retryCount: number;
  public userId: string;
  public address: string;
  public verified: boolean;
  public username: string;
  public createdAt: number;

  constructor() {
    Tracker.autorun(() => {
      this.isClient = MeteorMeteor.isClient;
      this.isCordova = MeteorMeteor.isCordova;
      this.isServer = MeteorMeteor.isServer;
      this.release = MeteorMeteor.release;
    });
    Tracker.autorun(() => {
      const ddpStatus = MeteorMeteor.status && MeteorMeteor.status();
      if(ddpStatus) {
        this.statusString = ddpStatus.status;
        switch (ddpStatus.status) {
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
            break;
        }
        this.connected = ddpStatus.connected;
        this.retryCount = ddpStatus.retryCount;
      } else {
        this.status = StatusEnum.offline;
        this.connected = false;
        this.retryCount = 0;
      }
    });
    Tracker.autorun(() => {
      this.userId = MeteorMeteor.userId && MeteorMeteor.userId();
      if (MeteorMeteor.user && MeteorMeteor.user()) {
        const user = MeteorMeteor.user();
        if (user.emails && user.emails.length > 0) {
          this.address = user.emails[0].address;
          this.verified = user.emails[0].verified;
        } else {
          this.address = undefined;
          this.verified = undefined;
        }
        this.username = user.username;
        this.createdAt = user.createdAt;
      } else {
        this.address = undefined;
        this.verified = undefined;
        this.username = undefined;
        this.createdAt = undefined;
      }
    });
  }
}
