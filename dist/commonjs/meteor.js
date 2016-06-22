'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meteor = undefined;

var _meteor = require('meteor/meteor');

var _tracker = require('meteor/tracker');



var Meteor = exports.Meteor = function Meteor() {
  var _this = this;

  

  _tracker.Tracker.autorun(function () {
    _this.isClient = _meteor.Meteor.isClient;
    _this.isCordova = _meteor.Meteor.isCordova;
    _this.isServer = _meteor.Meteor.isServer;
    _this.release = _meteor.Meteor.release;
  });
  _tracker.Tracker.autorun(function () {
    _this.status = _meteor.Meteor.status().status;
    _this.connected = _meteor.Meteor.status().connected;
    _this.retryCount = _meteor.Meteor.status().retryCount;
  });
  _tracker.Tracker.autorun(function () {
    _this.userId = _meteor.Meteor.userId();
    if (_meteor.Meteor.user()) {
      _this.address = _meteor.Meteor.user().emails[0].address;
      _this.verified = _meteor.Meteor.user().emails[0].verified;
      _this.username = _meteor.Meteor.user().username;
      _this.createdAt = _meteor.Meteor.user().createdAt;
    } else {
      _this.address = undefined;
      _this.verified = undefined;
      _this.username = undefined;
      _this.createdAt = undefined;
    }
  });
};