import { Meteor as MeteorMeteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export let Meteor = class Meteor {

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
};