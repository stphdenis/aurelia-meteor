"use strict";
var reactive_property_1 = require('./reactive-property');
exports.reactiveProperty = reactive_property_1.reactiveProperty;
var login_buttons_1 = require('./login-buttons');
exports.LoginButtons = login_buttons_1.LoginButtons;
var blaze_adapter_1 = require('./blaze-adapter');
exports.BlazeAdapter = blaze_adapter_1.BlazeAdapter;
var meteor_1 = require('./meteor');
exports.Meteor = meteor_1.Meteor;
function configure(frameworkConfig) {
    'use strict';
    frameworkConfig.globalResources('./login-buttons');
}
exports.configure = configure;
//# sourceMappingURL=aurelia-meteor.js.map