'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meteor = exports.LoginButtons = exports.BlazeAdapter = undefined;

var _blazeAdapter = require('./blaze-adapter');

var _loginButtons = require('./login-buttons');

var _meteor = require('./meteor');

function configure(config) {
  config.globalResources('./login-buttons');

  configureHtmlResourcePlugin(config);
}

exports.BlazeAdapter = _blazeAdapter.BlazeAdapter;
exports.LoginButtons = _loginButtons.LoginButtons;
exports.Meteor = _meteor.Meteor;