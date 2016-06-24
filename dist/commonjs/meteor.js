'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meteor = exports.StatusEnum = undefined;

var _meteor = require('meteor/meteor');

var _tracker = require('meteor/tracker');

var _ddp = require('meteor/ddp');



var StatusEnum = exports.StatusEnum = function () {
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

var Meteor = exports.Meteor = function Meteor() {
  var _this = this;

  

  _tracker.Tracker.autorun(function () {
    _this.isClient = _meteor.Meteor.isClient;
    _this.isCordova = _meteor.Meteor.isCordova;
    _this.isServer = _meteor.Meteor.isServer;
    _this.release = _meteor.Meteor.release;
  });

  _tracker.Tracker.autorun(function () {
    var meteorStatus = _meteor.Meteor.status();
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

  _tracker.Tracker.autorun(function () {
    _this.userId = _meteor.Meteor.userId();

    var meteorUser = _meteor.Meteor.user();
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