"use strict";
var meteor_1 = require('meteor/meteor');
var tracker_1 = require('meteor/tracker');
(function (StatusEnum) {
    StatusEnum[StatusEnum["connected"] = 0] = "connected";
    StatusEnum[StatusEnum["connecting"] = 1] = "connecting";
    StatusEnum[StatusEnum["failed"] = 2] = "failed";
    StatusEnum[StatusEnum["waiting"] = 3] = "waiting";
    StatusEnum[StatusEnum["offline"] = 4] = "offline";
})(exports.StatusEnum || (exports.StatusEnum = {}));
var StatusEnum = exports.StatusEnum;
var Meteor = (function () {
    function Meteor() {
        var _this = this;
        tracker_1.Tracker.autorun(function () {
            _this.isClient = meteor_1.Meteor.isClient;
            _this.isCordova = meteor_1.Meteor.isCordova;
            _this.isServer = meteor_1.Meteor.isServer;
            _this.release = meteor_1.Meteor.release;
        });
        tracker_1.Tracker.autorun(function () {
            var ddpStatus = meteor_1.Meteor.status && meteor_1.Meteor.status();
            if (ddpStatus) {
                _this.statusString = ddpStatus.status;
                switch (ddpStatus.status) {
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
                        break;
                }
                _this.connected = ddpStatus.connected;
                _this.retryCount = ddpStatus.retryCount;
            }
            else {
                _this.status = StatusEnum.offline;
                _this.connected = false;
                _this.retryCount = 0;
            }
        });
        tracker_1.Tracker.autorun(function () {
            _this.userId = meteor_1.Meteor.userId && meteor_1.Meteor.userId();
            if (meteor_1.Meteor.user && meteor_1.Meteor.user()) {
                _this.address = meteor_1.Meteor.user().emails[0].address;
                _this.verified = meteor_1.Meteor.user().emails[0].verified;
                _this.username = meteor_1.Meteor.user().username;
                _this.createdAt = meteor_1.Meteor.user().createdAt;
            }
            else {
                _this.address = undefined;
                _this.verified = undefined;
                _this.username = undefined;
                _this.createdAt = undefined;
            }
        });
    }
    return Meteor;
}());
exports.Meteor = Meteor;
//# sourceMappingURL=meteor.js.map