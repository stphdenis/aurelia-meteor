

import { Meteor as MeteorMeteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { DDP } from 'meteor/ddp';

export var StatusEnum = function () {
  function StatusEnum(name) {
    

    this.name = name;
  }

  StatusEnum.prototype.toString = function toString() {
    return this.name;
  };

  return StatusEnum;
}();
StatusEnum.connected = new StatusEnum('connected');
StatusEnum.connecting = new StatusEnum('connecting');
StatusEnum.failed = new StatusEnum('failed');
StatusEnum.waiting = new StatusEnum('waiting');
StatusEnum.offline = new StatusEnum('offline');

export var Meteor = function Meteor() {
  var _this = this;

  

  Tracker.autorun(function () {
    _this.isClient = MeteorMeteor.isClient;
    _this.isCordova = MeteorMeteor.isCordova;
    _this.isServer = MeteorMeteor.isServer;
    _this.release = MeteorMeteor.release;
  });

  Tracker.autorun(function () {
    var meteorStatus = MeteorMeteor.status();
    _this.statusString = meteorStatus.status;
    switch (_this.statusString) {
      case 'connected':
        _this.status = StatusEnum.connected;
        break;
      case 'connecting':
        _this.status = StatusEnum.connecting;
        break;
      case 'failed':
        _this.status = StatusEnum.failed;
        break;
      case 'waiting':
        _this.status = StatusEnum.waiting;
        break;
      case 'offline':
        _this.status = StatusEnum.offline;
        break;
      default:
        _this.status = undefined;
    }
    _this.connected = meteorStatus.connected;
    _this.retryCount = meteorStatus.retryCount;
  });

  Tracker.autorun(function () {
    _this.userId = MeteorMeteor.userId();

    var meteorUser = MeteorMeteor.user();
    if (meteorUser) {
      if (meteorUser.emails) {
        _this.address = meteorUser.emails[0].address;
        _this.verified = meteorUser.emails[0].verified;
      } else {
        _this.address = undefined;
        _this.verified = undefined;
      }
      _this.username = meteorUser.username;
      _this.createdAt = meteorUser.createdAt;
    } else {
      _this.address = undefined;
      _this.verified = undefined;
      _this.username = undefined;
      _this.createdAt = undefined;
    }
  });
};