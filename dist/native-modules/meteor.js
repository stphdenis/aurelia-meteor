

import { Meteor as MeteorMeteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export var Meteor = function Meteor() {
  var _this = this;

  

  Tracker.autorun(function () {
    _this.isClient = MeteorMeteor.isClient;
    _this.isCordova = MeteorMeteor.isCordova;
    _this.isServer = MeteorMeteor.isServer;
    _this.release = MeteorMeteor.release;
  });
  Tracker.autorun(function () {
    _this.status = MeteorMeteor.status().status;
    _this.connected = MeteorMeteor.status().connected;
    _this.retryCount = MeteorMeteor.status().retryCount;
  });
  Tracker.autorun(function () {
    _this.userId = MeteorMeteor.userId();
    if (MeteorMeteor.user()) {
      _this.address = MeteorMeteor.user().emails[0].address;
      _this.verified = MeteorMeteor.user().emails[0].verified;
      _this.username = MeteorMeteor.user().username;
      _this.createdAt = MeteorMeteor.user().createdAt;
    } else {
      _this.address = undefined;
      _this.verified = undefined;
      _this.username = undefined;
      _this.createdAt = undefined;
    }
  });
};